import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function AccountCard() {
  const [hidden, setHidden] = useState(false);

  return (
    <View style={styles.card}>
      {/* User Name */}
      <View>
        <Text style={styles.name}>Joel Kwame Ofori</Text>

        {/* Balance */}
        <Text style={styles.balance}>{hidden ? "****" : "$589.00"}</Text>
      </View>

      {/* Footer Row */}
      <View style={styles.footer}>
        <Text style={styles.accountNumber}>XXXX9878</Text>

        <TouchableOpacity onPress={() => setHidden(!hidden)}>
          <Feather name={hidden ? "eye" : "eye-off"} size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FDD106", // Yellow
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 16,
    padding: 16,
    height:200,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
  },
  balance: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#000",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountNumber: {
    fontSize: 16,
    color: "#6B7280", // gray
    fontWeight: "500",
  },
});
