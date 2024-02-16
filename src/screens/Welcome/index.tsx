import React from "react";
import { Image, SafeAreaView, Text } from "react-native";
import { widthPercentageToDP } from "../../utils/responsive";
import { marginViewVertical } from "../../utils/margins";
import FunctionButton from "../../components/FunctionButton";
import { ResizeMode, Video } from "expo-av";
import LoadingModal from "../../components/LoadingModal";
import useWelcome from "./hooks/useWelcome";
import { styles } from "./styles";

const Welcome = () => {
  const {
    media,
    isUploadingMedia,
    uploadProgress,
    pickImage,
    uploadMedia,
    user,
    logout,
    gotoBrowse,
  } = useWelcome();

  return (
    <SafeAreaView style={styles.container}>
      <LoadingModal
        isShown={isUploadingMedia}
        label={"Uploading ..."}
        loadingProgress={uploadProgress}
        showProgress
      />

      <Text style={styles.title}>Welcome</Text>

      {marginViewVertical(1)}
      <Text style={[styles.title, { fontSize: widthPercentageToDP(5) }]}>
        {user?.name ?? ""}
      </Text>
      {media && (
        <>
          {marginViewVertical(5)}
          {media?.type === "image" ? (
            <Image
              source={{ uri: media?.uri }}
              style={styles.image}
              resizeMode={"contain"}
            />
          ) : (
            <Video
              style={styles.video}
              shouldPlay
              source={{
                uri: media?.uri,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
            />
          )}
        </>
      )}
      {marginViewVertical(5)}
      <FunctionButton title={"Select File"} onButtonPressed={pickImage} />

      {media && (
        <>
          {marginViewVertical(2)}
          <FunctionButton title={"Upload File"} onButtonPressed={uploadMedia} />
        </>
      )}
      {marginViewVertical(5)}
      <FunctionButton
        title={"Browse your media"}
        onButtonPressed={gotoBrowse}
      />
      {marginViewVertical(2)}
      <FunctionButton title={"Log Out"} onButtonPressed={logout} />
    </SafeAreaView>
  );
};

export default Welcome;
