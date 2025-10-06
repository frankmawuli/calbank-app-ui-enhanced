import { View, Text, TouchableOpacity, StyleSheet,StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import React from 'react'


export default function Header({title}: {title: string}) {
  return (
   <View style={styles.header}>
              <StatusBar barStyle="dark-content" backgroundColor="#FFD700" />
           <TouchableOpacity>
             <Ionicons name="arrow-back" size={24} color="#000" />
           </TouchableOpacity>
           <Text style={styles.headerTitle}>{title}</Text>
           <TouchableOpacity>
             <Ionicons name="ellipsis-vertical" size={24} color="#000" />
           </TouchableOpacity>
         </View>
  )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFD700", // yellow background
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    height:80,    
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});