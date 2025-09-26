import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type RentCarScreenNavProp = StackNavigationProp<RootStackParamList, "RentCar">;

type Props = {
  navigation: RentCarScreenNavProp;
};

const sampleCar = { make: "Toyota", model: "Corolla", costPerDay: 50 };

export default function RentCarScreen({ navigation }: Props) {
  const [days, setDays] = useState("");
  const [showModal, setShowModal] = useState(false);

  const total = parseInt(days) * sampleCar.costPerDay || 0;

  return (
    <ImageBackground
      source={require("../assets/showroom.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Rent a Car</Text>
        <Text style={styles.text}>
          {sampleCar.make} {sampleCar.model} - ${sampleCar.costPerDay}/day
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Number of days"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={days}
          onChangeText={setDays}
        />
        <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={showModal} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Text style={styles.text}>
                Total: ${total} for {days} days
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setShowModal(false);
                  navigation.navigate("Confirmation", {
                    car: sampleCar,
                    days: parseInt(days),
                    total,
                  });
                }}
              >
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "gray" }]}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", color: "white", marginBottom: 20 },
  text: { fontSize: 18, color: "white", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "white",
    width: "80%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    color: "white",
  },
  button: { backgroundColor: "red", padding: 15, borderRadius: 10, marginTop: 10 },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalBox: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
