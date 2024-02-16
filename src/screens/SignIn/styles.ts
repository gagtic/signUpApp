import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(223,128,0)",
  },
  title: { color: "white", fontSize: widthPercentageToDP(8) },
});
