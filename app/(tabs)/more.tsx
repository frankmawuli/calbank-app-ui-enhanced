import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function ProfileScreen() {
  const menuItems = [
    { title: "Personal Information", icon: "person-outline" },
    { title: "Account Settings", icon: "settings-outline" },
    { title: "Transaction History", icon: "time-outline" },
    { title: "Security", icon: "lock-closed-outline" },
    { title: "Help & Support", icon: "help-circle-outline" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Ionicons name="image-outline" size={40} color="#999" />
          </View>
          <View style={styles.bar}></View>
          <View style={styles.subBar}></View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon} size={22} color="#555" />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={22}
                color="#999"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 80,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  bar: {
    width: 100,
    height: 10,
    backgroundColor: "#e5e5e5",
    borderRadius: 5,
    marginBottom: 6,
  },
  subBar: {
    width: 70,
    height: 8,
    backgroundColor: "#e5e5e5",
    borderRadius: 5,
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#333",
    marginTop: 2,
  },
});
