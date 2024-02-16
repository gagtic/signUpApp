import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { invalidateInputAndRedirect } from "../../../utils/auth";
import { Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/SignInSlice";
import { doc, getDoc } from "firebase/firestore";

const useSignIn = () => {
  const dispatch = useDispatch();

  // init states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);

  // updating states
  const handleEmailChanged = (email: string) => setEmail(email);
  const handlePasswordChanged = (password: string) => setPassword(password);
  const handleTogglePasswordHidden = () =>
    setIsPasswordHidden(!isPasswordHidden);
  const hidePassword = () => setIsPasswordHidden(true);

  const navigation = useNavigation();
  const handleSignUpPressed = () => navigation.navigate("SignUp");

  //login
  const doLogin = async () => {
    try {
      setIsSigningIn(true);
      if (email === "" || password === "") {
        Alert.alert(
          "Log In Error",
          "Please input email and password correctly"
        );
        return;
      }
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const userData = await getDoc(doc(firestore, "users", user?.uid));

      setIsSigningIn(false);
      dispatch(
        setUser({ email, ...(userData?.data() as any), uid: user?.uid })
      );
    } catch (e: any) {
      setIsSigningIn(false);
      console.error(e?.code);
      if (e?.code) alert("Please check your email and password");
    }
  };

  // invalidate user input and then sign in
  const signInUser = () =>
    invalidateInputAndRedirect(false, email, password, hidePassword, doLogin);

  return {
    email,
    password,
    isPasswordHidden,
    isSigningIn,
    handleEmailChanged,
    handlePasswordChanged,
    handleTogglePasswordHidden,
    handleSignUpPressed,
    signInUser,
  };
};

export default useSignIn;
