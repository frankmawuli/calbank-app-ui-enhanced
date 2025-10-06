import { View, Text, } from 'react-native'
import React from 'react'
import AccountCard from '@/components/account-card'
import QuickActions from '@/components/quick-action'
import Greeting from '@/components/greeting'
import PromoBanner from '@/components/bottom-ad'

export default function Dashboard() {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <Greeting />
      <AccountCard />
     

      <View style ={{
        marginVertical:30      }}>
        <Text  style ={{
          fontWeight:"bold",
          fontSize:15,
          paddingHorizontal:20,     
        }}>Quick Actions </Text>
        <QuickActions />
      </View>
      <View>
        <PromoBanner onClose={() => {}} />
      </View>
    </View>
  );
}