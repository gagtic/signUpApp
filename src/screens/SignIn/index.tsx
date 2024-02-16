import React from "react";
import { Text } from "react-native";
import useSignIn from "./hooks/useSignIn";
import { SafeAreaView } from "react-native-safe-area-context";
import { marginViewVertical } from "../../utils/margins";
import InputField from "../../components/InputField";
import InputFieldSecure from "../../components/InputFieldSecure";
import FunctionButton, { ButtonMode } from "../../components/FunctionButton";
import SimpleButton from "../../components/SimpleButton";
import { styles } from "./styles";
import LoadingModal from "../../components/LoadingModal";

const SignIn = () => {
  const {
    email,
    password,
    isPasswordHidden,
    isSigningIn,
    handleEmailChanged,
    handlePasswordChanged,
    handleTogglePasswordHidden,
    handleSignUpPressed,
    signInUser,
  } = useSignIn();

  return (
    <SafeAreaView style={styles.container}>
      <LoadingModal isShown={isSigningIn} label={"Signing you in ..."} />
      <Text style={styles.title}>Sign In</Text>
      {marginViewVertical(5)}
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
      {marginViewVertical(10)}
      <FunctionButton
        title={"Sign In"}
        onButtonPressed={signInUser}
        buttonMode={ButtonMode.Dark}
      />
      {marginViewVertical(3)}
      <SimpleButton
        title={"Sign Up"}
        onButtonPressed={handleSignUpPressed}
        buttonMode={ButtonMode.Dark}
      />
    </SafeAreaView>
  );
};

export default SignIn;
