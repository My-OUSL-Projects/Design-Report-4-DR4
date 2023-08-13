import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/RegisterScr";
import Login from "./screens/LoginScr";
import Home from "./screens/HomeScr";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
