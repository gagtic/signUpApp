import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(33,27,40)",
  },
  title: { color: "white", fontSize: widthPercentageToDP(8) },
  image: {
    width: widthPercentageToDP(90),
    height: widthPercentageToDP(50),
  },
  video: {
    width: widthPercentageToDP(90),
    height: widthPercentageToDP(50),
    borderRadius: 10,
  },
});
