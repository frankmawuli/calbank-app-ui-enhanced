import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function PasscodeScreen() {
  const [passcode, setPasscode] = useState([]);
  const router = useRouter();

  const PIN = "1234"; // ✅ your set PIN

  const handlePress = (num) => {
    if (passcode.length < 4) {
      setPasscode([...passcode, num]);
    }
  };

  const handleDelete = () => {
    setPasscode(passcode.slice(0, -1));
  };

  useEffect(() => {
    if (passcode.length === 4) {
      const enteredPin = passcode.join("");
      if (enteredPin === PIN) {
        // ✅ Navigate if PIN is correct
        router.replace("/(tabs)/dashboard");
      } else {
        Alert.alert("Incorrect PIN", "Please try again");
        setPasscode([]);
      }
    }
  }, [passcode]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passcode</Text>

      {/* Passcode Display */}
      <View style={styles.passcodeBox}>
        {[0, 1, 2, 3].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              passcode[index] !== undefined && styles.filledDot,
            ]}
          />
        ))}
      </View>

      {/* Keypad */}
      <View style={styles.keypad}>
        {[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          ["", 0, "⌫"],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.key,
                  item === passcode[passcode.length - 1] && styles.activeKey,
                ]}
                disabled={item === ""}
                onPress={() =>
                  item === "⌫" ? handleDelete() : handlePress(item)
                }
              >
                <Text style={styles.keyText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
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
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  passcodeBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 8,
  },
  filledDot: { backgroundColor: "orange", borderColor: "orange" },
  keypad: { width: "70%" },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  key: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  activeKey: { backgroundColor: "orange" },
  keyText: { fontSize: 22, fontWeight: "bold" },
});
