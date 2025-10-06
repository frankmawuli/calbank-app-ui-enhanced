import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import CustomTextInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    router.push("/auth/pin");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/cal.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            placeholder="Enter Email/Username"
            type="text"
            {...register("username")}
            
            errors={errors.username}
            
          />
          <CustomTextInput
            placeholder="Password"
            type="password"
            {...register("password")}
            errors={errors.password}
          />
        </View>

        <Text
          style={{
            textAlign: "right",
            paddingTop: 10,
            paddingRight: 20,
            bottom: 0,
            color: "#F18C20",
          }}
        >
          Forgot Password?
        </Text>
        <CustomButton text="Login" onPress={() => {router.push("/auth/pin")}} />
        <View>
          <Text style={{ textAlign: "center", bottom: 80 }}>
            Don&apos;t have an account?
            <Text
              style={{
                color: "#F18C20",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  formContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    paddingLeft: 20,
  },
  inputContainer: {
    flexDirection: "column",
    width: "100%",
    gap: 10,
    paddingHorizontal: 15,
  },
});
