import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons, FontAwesome ,FontAwesome5} from "@expo/vector-icons"; // You can replace with any icon library

const menuItems = [
  {
    name: "Send Money",
    icon: <FontAwesome name="paper-plane-o" size={24} color="black" />,
    onPress: () => alert("Send Money tapped"),
  },
  {
    name: "Pay Bills",
    icon:   <FontAwesome5 name="hand-holding-usd" size={24} color="black" />,
    onPress: () => alert("Pay Bills tapped"),
  },
  {
    name: "Deposit Checks",
    icon: <Feather name="maximize" size={24} color="black" />,
    onPress: () => alert("Deposit Checks tapped"),
  },
  {
    name: "Manage Cards",
    icon: <Ionicons name="wallet-outline" size={24} color="black" />,
    onPress: () => alert("Manage Cards tapped"),
  },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
        <Text>
        </Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.card, { backgroundColor: "#E0E0E0" }]} // Light gray background
          onPress={item.onPress}
        >
          {item.icon}
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },
  card: {
    width: "48%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,

  },
  text: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
});
