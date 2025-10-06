import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "@/components/header";
import CustomTextInput from "@/components/custom-input";

export default function PaymentScreen() {
  // Dummy errors object for demonstration; replace with actual error handling as needed
  const errors = {};

  return (
    <>
      <Header title="Payment Confirmation" />
      <View style={styles.container}>
        {/* Form Inputs */}
        <View style={styles.form}>
          <CustomTextInput placeholder="Account Number" type="text" errors={errors} />
          <CustomTextInput placeholder="Amount" type="text" errors={errors} />
          <CustomTextInput placeholder="Beneficiary Name" type="text" errors={errors} />
          <CustomTextInput placeholder="Payment Reference" type="text" errors={errors} />
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue to pay</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFD700",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  form: {
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
    elevation: 1,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
  },
  buttonText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
});
