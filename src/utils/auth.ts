import { Alert, Keyboard } from "react-native";
import { isEmailValid } from "./email";

export const invalidateInputAndRedirect = (
  isSignUp: boolean,
  email: string,
  password: string,
  hidePassword: () => void,
  forwardFunction: () => void,
  name?: string,
  confirmPassword?: string
) => {
  hidePassword();
  Keyboard.dismiss();
  if (email === "" || !isEmailValid(email))
    Alert.alert("Error", "Please input a valid email address");
  else if (password?.length < 8)
    Alert.alert("Error", "Please a password at least 8 characters long");
  else if (password === "") Alert.alert("Please input a valid password");
  else if (isSignUp) {
    if (name === "") Alert.alert("Error", "Please enter your name");
    if (confirmPassword === "")
      Alert.alert("Error", "Please input a valid confirm password");
    else if (password !== confirmPassword)
      Alert.alert("Error", "Password and confirm password does not match");
    else forwardFunction();
  } else forwardFunction();
};
