import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, firestore } from "../../../utils/firebase";
import { Alert } from "react-native";
import { invalidateInputAndRedirect } from "../../../utils/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "../../SignIn/redux/SignInSlice";

const useSignUp = () => {
  // init states
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] =
    useState<boolean>(true);

  // update states
  const handleNameChanged = (name: string) => setName(name);
  const handleEmailChanged = (email: string) => setEmail(email);
  const handlePasswordChanged = (password: string) => setPassword(password);
  const handleConfirmPassword = (confirmPassword: string) =>
    setConfirmPassword(confirmPassword);
  const handleTogglePasswordHidden = () =>
    setIsPasswordHidden(!isPasswordHidden);
  const handleToggleConfirmPasswordHidden = () =>
    setIsConfirmPasswordHidden(!isConfirmPasswordHidden);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLoginPressed = () => navigation.goBack();

  const hidePasswords = () => {
    setIsPasswordHidden(true);
    setIsConfirmPasswordHidden(true);
  };

  // invalidate and sign up user
  const signUpUser = () =>
    invalidateInputAndRedirect(
      true,
      email,
      password,
      hidePasswords,
      sendCreateRequest,
      name,
      confirmPassword
    );

  // signing up user call
  const sendCreateRequest = async () => {
    try {
      setIsSigningUp(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (user) {
        const documentRef = doc(firestore, "users", user?.uid);
        const userData = { email, name, media: [] };

        await setDoc(documentRef, userData);

        setTimeout(() => {
          setIsSigningUp(false);
          dispatch(setUser({ ...userData, uid: user?.uid, email, media: [] }));
        }, 1000);
      }
    } catch (e: any) {
      console.error("Error", JSON.stringify(e));
      setIsSigningUp(false);
      if (e?.code === "auth/email-already-in-use")
        Alert.alert("Error", "Email already taken");
    }
  };

  return {
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
  };
};

export default useSignUp;
