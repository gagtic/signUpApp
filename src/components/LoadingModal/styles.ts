import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "../../utils/responsive";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  title: { fontSize: widthPercentageToDP(3.5) },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: widthPercentageToDP(10),
    alignItems: "center",
  },
});
