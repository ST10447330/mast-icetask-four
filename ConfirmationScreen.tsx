import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type ConfirmationRouteProp = RouteProp<RootStackParamList, "Confirmation">;

type Props = {
  route: ConfirmationRouteProp;
};

export default function ConfirmationScreen({ route }: Props) {
  const { car, days, total } = route.params;

  return (
    <ImageBackground
      source={require("../assets/porshe.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Booking Confirmed!</Text>
        <Text style={styles.text}>
          Car: {car.make} {car.model}
        </Text>
        <Text style={styles.text}>Days: {days}</Text>
        <Text style={styles.text}>Amount Due: ${total}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", color: "white", marginBottom: 20 },
  text: { fontSize: 18, color: "white", marginBottom: 10 },
});
