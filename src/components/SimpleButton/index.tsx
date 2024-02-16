import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ButtonMode } from "../FunctionButton";
import { styles } from "./styles";

interface IFucntionButtonLight {
  title: string;
  buttonMode?: ButtonMode;
  onButtonPressed: () => void;
}

const SimpleButton: FC<IFucntionButtonLight> = ({
  title,
  buttonMode = ButtonMode.Light,
  onButtonPressed,
}) => {
  return (
    <TouchableOpacity onPress={onButtonPressed}>
      <Text
        style={[
          styles.text,
          {
            color:
              buttonMode === ButtonMode.Dark
                ? "rgb(33,27,40)"
                : "rgb(223,128,0)",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;
