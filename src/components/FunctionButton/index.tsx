import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface IFucntionButtonLight {
  title: string;
  buttonMode?: ButtonMode;
  onButtonPressed: () => void;
}

export enum ButtonMode {
  Light,
  Dark,
}

const FunctionButton: FC<IFucntionButtonLight> = ({
  title,
  buttonMode = ButtonMode.Light,
  onButtonPressed,
}) => {
  return (
    <TouchableOpacity onPress={onButtonPressed}>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              buttonMode === ButtonMode.Dark
                ? "rgb(33,27,40)"
                : "rgb(223,128,0)",
          },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FunctionButton;
