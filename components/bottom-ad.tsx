import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // install if not already

export default function PromoBanner() {
  return (
    <View style={styles.container}>
      {/* Close Icon */}
      <TouchableOpacity style={styles.closeBtn}>
        <Ionicons name="close" size={22} color="#000" />
      </TouchableOpacity>

    <View style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/bottom-ad.jpg")}
        style={{ width: "100%", height: 120, borderRadius: 10 }}
        resizeMode="cover"
      />
    </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 4,
    elevation: 2,
  },


});
