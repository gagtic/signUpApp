import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { Image, Text, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { styles } from "../styles";

const useBrowse = () => {
  // getting user from redux
  const user = useSelector((state: RootState) => state.user.value);
  const navigation = useNavigation();

  //rendering list item
  const renderItem = ({
    item,
  }: {
    item: { url: string; type: string };
    index: number;
  }) => {
    return (
      <View>
        {item?.type === "image" ? (
          <Image
            source={{ uri: item.url }}
            style={styles.image}
            resizeMode={"contain"}
          />
        ) : (
          <Video
            style={styles.video}
            source={{
              uri: item?.url,
            }}
            useNativeControls
            resizeMode={ResizeMode.COVER}
          />
        )}
      </View>
    );
  };

  // render view if no items in list
  const renderNoItems = () => {
    return (
      <View style={styles.noContentContainer}>
        <Text style={styles.noContentText}>No media uploaded....</Text>
      </View>
    );
  };

  const handleBackPressed = () => navigation?.goBack();

  return {
    user,
    renderItem,
    renderNoItems,
    handleBackPressed,
  };
};

export default useBrowse;
