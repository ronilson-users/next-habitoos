import React from "react";
import { View, StyleSheet, Text } from "react-native";

import {theme } from '@/app/theme';

export default function Profile() {
 return (
  <View style={styles.container}>
   <Text style={styles.text}>Profile !</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor:theme.colors.black,
 
 },
 text: { 
   color: theme.colors.red,
  
 
 },
});
