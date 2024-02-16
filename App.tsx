import Navigation from "./src/navigation";
import { useFonts } from "expo-font";
import { store } from "./src/redux/store/store";
import { Provider } from "react-redux";

export default function App() {
  const [fontsLoaded] = useFonts({
    ["Roboto-Black"]: require("./assets/fonts/Roboto/Roboto-Black.ttf"),
    ["Roboto-BlackItalic"]: require("./assets/fonts/Roboto/Roboto-BlackItalic.ttf"),
    ["Roboto-Bold"]: require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    ["Roboto-BoldItalic"]: require("./assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
    ["Roboto-Italic"]: require("./assets/fonts/Roboto/Roboto-Italic.ttf"),
    ["Roboto-Light"]: require("./assets/fonts/Roboto/Roboto-Light.ttf"),
    ["Roboto-LightItalic"]: require("./assets/fonts/Roboto/Roboto-LightItalic.ttf"),
    ["Roboto-Medium"]: require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    ["Roboto-MediumItalic"]: require("./assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
    ["Roboto-Regular"]: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    ["Roboto-Thin"]: require("./assets/fonts/Roboto/Roboto-Thin.ttf"),
    ["Roboto-ThinItalic"]: require("./assets/fonts/Roboto/Roboto-ThinItalic.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
