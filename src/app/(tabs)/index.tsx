
import React from 'react';
import { theme } from '@/app/theme'; 

import { View, StyleSheet, Text } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Home David!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black
  },
  text: {
    color: theme.colors.red,
    
  }
});