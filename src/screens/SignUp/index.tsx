import React from "react";
import { SafeAreaView, Text } from "react-native";
import InputField from "../../components/InputField";
import InputFieldSecure from "../../components/InputFieldSecure";
import { marginViewVertical } from "../../utils/margins";
import FunctionButton from "../../components/FunctionButton";
import SimpleButton from "../../components/SimpleButton";
import useSignUp from "./hooks/useSignUp";
import LoadingModal from "../../components/LoadingModal";
import { styles } from "./styles";

const SignUp = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    isPasswordHidden,
    isConfirmPasswordHidden,
    isSigningUp,
    handleNameChanged,
    handleEmailChanged,
    handlePasswordChanged,
    handleConfirmPassword,
    handleTogglePasswordHidden,
    handleToggleConfirmPasswordHidden,
    handleLoginPressed,
    signUpUser,
  } = useSignUp();

  return (
    <SafeAreaView style={styles.container}>
      <LoadingModal isShown={isSigningUp} label={"Signing you up ..."} />
      <Text style={styles.title}>Create Account</Text>
      {marginViewVertical(5)}
      <InputField
        title={"Name"}
        value={name}
        onChangeText={handleNameChanged}
      />
      {marginViewVertical(2.5)}
      <InputField
        title={"Email"}
        value={email}
        keyboardType={"email-address"}
        onChangeText={handleEmailChanged}
      />
      {marginViewVertical(2.5)}
      <InputFieldSecure
        title={"Passowrd"}
        value={password}
        isHidden={isPasswordHidden}
        onToggleHidden={handleTogglePasswordHidden}
        onChangeText={handlePasswordChanged}
      />
      {marginViewVertical(2.5)}
      <InputFieldSecure
        title={"Passowrd"}
        value={confirmPassword}
        isHidden={isConfirmPasswordHidden}
        onToggleHidden={handleToggleConfirmPasswordHidden}
        onChangeText={handleConfirmPassword}
      />
      {marginViewVertical(10)}
      <FunctionButton title={"Sign Up"} onButtonPressed={signUpUser} />
      {marginViewVertical(3)}
      <SimpleButton title={"Sign In"} onButtonPressed={handleLoginPressed} />
    </SafeAreaView>
  );
};

export default SignUp;
