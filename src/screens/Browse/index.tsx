import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP } from "../../utils/responsive";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import useBrowse from "./hooks/useBrowse";

const Browse = () => {
  const { user, renderItem, renderNoItems, handleBackPressed } = useBrowse();

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={renderNoItems}
        data={user?.media}
        renderItem={renderItem}
        numColumns={2}
        style={styles.list}
      />

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity onPress={handleBackPressed}>
          <Ionicons
            name="chevron-back-outline"
            size={widthPercentageToDP(6)}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Browse;
