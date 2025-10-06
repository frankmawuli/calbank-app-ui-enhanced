import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

interface CustomButtonProps {
  text?: string;
  onPress?: () => void;
}
export default function CustomButton({text, onPress}: CustomButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text || "Get started"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    height: 50,
    width:"90%",
    backgroundColor: "#FFD700", // Yellow
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10, // Rounded edges
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#000", // Black text
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
