import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type LoginScreenNavProp = StackNavigationProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavProp;
};

export default function LoginScreen({ navigation }: Props) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.toLowerCase() === "admin") {
      navigation.navigate("AddCar");
    } else {
      navigation.navigate("RentCar");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/showroom.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          placeholderTextColor="#ccc"
          onChangeText={setUsername}
          value={username}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", color: "white", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "white",
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    color: "white",
  },
  button: { backgroundColor: "red", padding: 15, borderRadius: 10 },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
