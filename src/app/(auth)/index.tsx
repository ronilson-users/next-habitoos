import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
 return (
  <View style={styles.container}>
   <Text style={styles.text}>Welcome to React Native!</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: 12,
  padding: 32,
 },
 text: {
  fontSize: 18,
  fontWeight: 'bold',
 }
});
