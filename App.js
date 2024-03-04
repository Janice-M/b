import React from 'react';
import Constants from 'expo-constants'; 
import { StyleSheet, Text, View } from 'react-native';

const Home=()=>{ 
  return ( 
      <Text style={{ 
                    marginTop:300, 
                    marginLeft:10}}> 
          Baby Bushra 
      </Text> 
  ) 
} 
  
  
export default function App() { 
  return ( 
    <View> 
          <Home/> 
    </View> 
  ); 
} 