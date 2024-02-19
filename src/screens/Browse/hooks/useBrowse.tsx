import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { Text, View } from "react-native";
import { styles } from "../styles";
import { IMedia } from "../../SignIn/redux/SignInSlice";
import BrowseItem from "../components/BrowseItem";

const useBrowse = () => {
  // getting user from redux
  const user = useSelector((state: RootState) => state.user.value);
  const navigation = useNavigation();

  //key extractor for the flatlist
  const keyExtractor = (item: IMedia, index: number) => index.toString();

  //rendering list item
  const renderItem = ({
    item,
  }: {
    item: { url: string; type: string };
    index: number;
  }) => <BrowseItem item={item} />;

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
    keyExtractor,
    renderItem,
    renderNoItems,
    handleBackPressed,
  };
};

export default useBrowse;
