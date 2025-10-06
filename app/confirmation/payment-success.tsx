import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function PaymentSuccessScreen() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        <View style={styles.successIcon}>
          <Ionicons name="checkmark" size={50} color="#fff" />
        </View>

        <Text style={styles.title}>Payment Successful!</Text>
        <Text style={styles.subtitle}>Your money has been sent</Text>
      </View>

      {/* Payment Details Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailsTitle}>Payment Details</Text>
        <Text style={styles.detailsDate}>30th August 2025, 10:25 AM</Text>

        <View style={styles.detailItem}>
          <MaterialIcons name="attach-money" size={24} color="#333" />
          <View>
            <Text style={styles.detailLabel}>Payment</Text>
            <Text style={styles.detailValue}>GHS 200.00</Text>
          </View>
        </View>

        <View style={styles.detailItem}>
          <Ionicons name="card-outline" size={22} color="#333" />
          <View>
            <Text style={styles.detailLabel}>Account Number</Text>
            <Text style={styles.detailValue}>XXXX9878</Text>
          </View>
        </View>

        <View style={styles.detailItem}>
          <Ionicons name="checkmark-circle-outline" size={22} color="#333" />
          <View>
            <Text style={styles.detailLabel}>Status</Text>
            <Text style={[styles.detailValue, { color: "green" }]}>
              Success
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.receiptButton}>
          <Text style={styles.receiptText}>Receipt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeText}>Go to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD700",
  },
  topSection: {
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  successIcon: {
    backgroundColor: "green",
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    color: "#333",
    fontSize: 14,
    marginTop: 5,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 25,
    marginTop: 30,

  },
  detailsTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  detailsDate: {
    color: "#777",
    fontSize: 13,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  detailLabel: {
    color: "#666",
    fontSize: 13,
    marginLeft: 10,
  },
  detailValue: {
    color: "#000",
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,

    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  receiptButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginRight: 10,
  },
  homeButton: {
    flex: 1,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  receiptText: {
    fontWeight: "600",
    color: "#000",
  },
  homeText: {
    fontWeight: "600",
    color: "#000",
  },
});
