import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type HomeScreenNavProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <ImageBackground
      source={require("../assets/showroom.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Lineros Car Dealership</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 26, fontWeight: "bold", color: "white", marginBottom: 30 },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
