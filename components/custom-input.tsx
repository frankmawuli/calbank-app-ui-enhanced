import React from "react";
import { View, TextInput, StyleSheet,Text} from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';




interface props{
  placeholder :string
  type :string
  errors: any

}
export default function CustomTextInput({ placeholder ,type,errors }:props) {
  
  return (
    <>
      <View style={{...styles.input, borderColor: errors ? "red" : "#333"}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#000" // black placeholder
          secureTextEntry={type === "password"}
        />
        {errors ? (
          <EvilIcons name="exclamation" size={24} color="red" />
        ) : (
          <EvilIcons name="check" size={24} color="green" />
        )}
      </View>
      {errors && <Text style={{ color: "red", marginTop: 5, marginLeft: 5 }}>{errors.message}</Text>}
      
    
    </>
  );
}

const styles = StyleSheet.create({
 
  input: {
    width: "100%", // takes most of screen width
    height: 60,
    borderWidth: 1,
    borderRadius: 10, // rounded edges
    fontSize: 10,
    fontWeight: "600",
    color: "#000",
    backgroundColor: "#fff",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",

    paddingHorizontal: 20,

    
  },
});
