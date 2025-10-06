import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Dummy services data
const services = [
  { id: "1", name: "Beneficiaries", icon: "people-outline" },
  { id: "2", name: "Bulk Transfers", icon: "swap-horizontal-outline" },
  { id: "3", name: "Investments", icon: "trending-up-outline" },
  { id: "4", name: "Instant Accounts", icon: "flash-outline" },
  { id: "5", name: "Payments", icon: "cash-outline" },
  { id: "6", name: "Snap Cash", icon: "camera-outline" },
  { id: "7", name: "Cardless Service", icon: "qr-code-outline" },
  { id: "8", name: "Card Services", icon: "card-outline" },
  { id: "9", name: "Agent Banking", icon: "business-outline" },
  { id: "10", name: "Shop", icon: "cart-outline" },
  { id: "11", name: "Services", icon: "settings-outline" },
  { id: "12", name: "Locator", icon: "location-outline" },
];

export default function BankingApp() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Banking App</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={require("@/assets/images/services-ad.png")}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* Services Grid */}
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={28} color="#000" />
            </View>
            <Text style={styles.serviceText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FFD700", // yellow background
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height:100,
    paddingTop:20
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  banner: {
    height: 230,
    
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  grid: {
    padding: 10,
  },
  serviceItem: {
    flex: 1,
    margin: 8,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    padding: 15,
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 12,
    textAlign: "center",
  },
});
