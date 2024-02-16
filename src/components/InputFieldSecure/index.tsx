import React, { FC } from "react";
import { Pressable, Text, View } from "react-native";
import InputField from "../InputField";
import { Feather } from "@expo/vector-icons";
import { widthPercentageToDP } from "../../utils/responsive";
import { marginViewHorizontal } from "../../utils/margins";

interface IInputFieldSecure {
  title: string;
  value: string;
  isHidden: boolean;
  onToggleHidden: () => void;
  onChangeText: (text: string) => void;
}

const InputFieldSecure: FC<IInputFieldSecure> = ({
  title,
  value,
  isHidden,
  onToggleHidden,
  onChangeText,
}) => {
  return (
    <View>
      <InputField
        title={title}
        value={value}
        onChangeText={onChangeText}
        isSecure={isHidden}
      >
        <Pressable onPress={onToggleHidden}>
          <Feather
            name={isHidden ? "eye" : "eye-off"}
            size={widthPercentageToDP(4.5)}
            color="white"
          />
        </Pressable>
        {marginViewHorizontal(2)}
      </InputField>
    </View>
  );
};

export default InputFieldSecure;
