import { View, Image, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "@/components/custom-button";
import { router } from "expo-router";

export default function Step1() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/cal.jpg")}
        style={styles.image}
        resizeMode="cover" // or "contain", "stretch" depending on effect
      />
      <View style ={{
        position: "relative",
        bottom: 100,
        width: "100%",
        alignItems: "center",
      }}>
        <CustomButton 
          text="Get Started"
          onPress={() => router.push("/auth/login")}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // fill the screen
    position: "relative", 
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
