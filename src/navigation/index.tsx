import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Welcome from "../screens/Welcome";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import Browse from "../screens/Browse";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = useSelector((state: RootState) => state.user.value);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {Object.keys(user ?? {}).length === 0 ? (
          <Stack.Group>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Browse" component={Browse} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
