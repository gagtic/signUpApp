import React, { FC, ReactNode } from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { marginViewVertical } from "../../utils/margins";
import { styles } from "./styles";

interface IInputField {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  children?: ReactNode;
  isSecure?: boolean;
}

const InputField: FC<IInputField> = ({
  title,
  value,
  onChangeText,
  keyboardType,
  children,
  isSecure = false,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {marginViewVertical(1)}
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          keyboardType={keyboardType ?? "default"}
          secureTextEntry={isSecure}
          style={styles.input}
          autoCapitalize={"none"}
        />
        {children}
      </View>
    </View>
  );
};

export default InputField;
