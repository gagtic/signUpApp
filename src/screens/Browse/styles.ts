import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: widthPercentageToDP(100),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(33,27,40)",
  },
  list: { width: widthPercentageToDP(100) },
  bottomButtonContainer: {
    position: "absolute",
    bottom: heightPercentageToDP(8),
    backgroundColor: "rgb(223, 128, 0)",
    borderRadius: 1000,
    padding: widthPercentageToDP(2),
  },
  title: { color: "white", fontSize: widthPercentageToDP(8) },
  noContentContainer: {
    height: heightPercentageToDP(100),
    alignItems: "center",
    justifyContent: "center",
  },
  noContentText: { color: "white", fontSize: widthPercentageToDP(5) },
});
