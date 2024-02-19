import { ResizeMode, Video } from "expo-av";
import React, { FC } from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import { IMedia } from "../../../SignIn/redux/SignInSlice";

interface IBrowseItem {
  item: IMedia;
}

const BrowseItem: FC<IBrowseItem> = ({ item }) => {
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

export default BrowseItem;
