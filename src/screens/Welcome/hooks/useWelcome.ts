import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { firestore, makeRandomString } from "../../../utils/firebase";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { resetUser, setUserMedia } from "../../SignIn/redux/SignInSlice";
import { useNavigation } from "@react-navigation/native";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const useWelcome = () => {
  const [media, setMedia] = useState<ImagePicker.ImagePickerAsset>();
  const [isUploadingMedia, setIsUploadingMedia] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.value);

  const navigation = useNavigation();

  useEffect(() => {
    console.log("media", user?.media);
  }, [user]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setMedia(result?.assets?.[0]);
    }
  };

  const logout = () => {
    dispatch(resetUser());
  };

  const addMediaToUserList = async (mediaUrl: string) => {
    try {
      const documentRef = doc(firestore, "users", user?.uid ?? "");

      const documentSnapshot = await getDoc(documentRef);

      if (documentSnapshot.exists()) {
        const userData = documentSnapshot.data();
        const mediaArray = userData?.media ?? [];
        mediaArray.push({ url: mediaUrl, type: media?.type ?? "" });

        dispatch(setUserMedia(mediaArray));

        await updateDoc(documentRef, {
          media: mediaArray,
        });
      }
    } catch (error) {
      console.error("Error adding media to user list:", error);
    }
  };

  const uploadMedia = async () => {
    try {
      if (media) {
        const uri = media?.uri;
        const storage = getStorage();
        const fileName = uri.substring(uri.lastIndexOf("/") + 1);
        const storageRef = ref(
          storage,
          "upload_media/" + `${makeRandomString(5)}_` + fileName
        );
        const response = await fetch(uri);
        const blob = await response.blob();
        setIsUploadingMedia(true);
        const uploadTask = uploadBytesResumable(storageRef, blob);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(Math.floor(progress));
          },
          (error) => {
            console.error("e", error);
            setIsUploadingMedia(false);
          },
          async () => {
            setIsUploadingMedia(false);
            Alert.alert("Done", "Your file is uploaded!");
            setMedia(undefined);
            const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
            addMediaToUserList(imageUrl);
          }
        );
      }
    } catch (e) {
      console.error("e", e);
    }
  };

  const gotoBrowse = () => navigation.navigate("Browse");

  return {
    media,
    isUploadingMedia,
    uploadProgress,
    pickImage,
    uploadMedia,
    user,
    logout,
    gotoBrowse,
  };
};

export default useWelcome;
