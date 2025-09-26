import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import AddCarScreen from "./screens/AddCarScreen";
import RentCarScreen from "./screens/RentCarScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  AddCar: undefined;
  RentCar: undefined;
  Confirmation: {
    car: { make: string; model: string; costPerDay: number };
    days: number;
    total: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AddCar" component={AddCarScreen} />
        <Stack.Screen name="RentCar" component={RentCarScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
