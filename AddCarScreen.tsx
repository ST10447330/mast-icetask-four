import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function AddCarScreen() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [cost, setCost] = useState("");

  const handleAddCar = () => {
    alert(`Car Added: ${make} ${model}, $${cost}/day`);
    setMake("");
    setModel("");
    setCost("");
  };

  return (
    <ImageBackground
      source={require("../assets/showroom.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Add a Car</Text>
        <TextInput
          style={styles.input}
          placeholder="Make"
          placeholderTextColor="#ccc"
          value={make}
          onChangeText={setMake}
        />
        <TextInput
          style={styles.input}
          placeholder="Model"
          placeholderTextColor="#ccc"
          value={model}
          onChangeText={setModel}
        />
        <TextInput
          style={styles.input}
          placeholder="Cost per day"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={cost}
          onChangeText={setCost}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddCar}>
          <Text style={styles.buttonText}>Add Car</Text>
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
    marginBottom: 15,
    borderRadius: 8,
    color: "white",
  },
  button: { backgroundColor: "red", padding: 15, borderRadius: 10 },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
