import Navigation from "./src/navigation";
import { useFonts } from "expo-font";
import { store } from "./src/redux/store/store";
import { Provider } from "react-redux";
import getFonts from "./src/utils/fonts";

export default function App() {
  const { fontsLoaded } = getFonts();

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
