import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Feather,MaterialCommunityIcons } from '@expo/vector-icons';

export default function Greeting() {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection:"row",
        alignContent:"center",
        gap:10
      }}>
        <Feather name="sun" size={24} color="black" />
        <Text style={{
            fontWeight:"bold",
            fontSize:14
        }}>Good Afternoon Joe</Text>
      </View>

      <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignContent:"center",
        width:"100%",
        gap:"46%",
        padding:20

    }

})