import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/responsive";

export const styles = StyleSheet.create({
  title: {
    fontSize: widthPercentageToDP(4.5),
    color: "white",
    fontFamily: "Roboto-Medium",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    width: widthPercentageToDP(80),
    paddingVertical: heightPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(3),
  },
  input: {
    flex: 1,
    fontSize: widthPercentageToDP(4.2),
    color: "white",
    fontFamily: "Roboto-Regular",
  },
});
