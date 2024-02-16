import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(223,128,0)",
    width: widthPercentageToDP(80),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: heightPercentageToDP(100),
    paddingVertical: heightPercentageToDP(1.5),
  },
  text: {
    fontFamily: "Roboto-Bold",
    color: "white",
    fontSize: widthPercentageToDP(4.5),
  },
});
