import Input from '../../components/Input';
// src/app/login.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
 const router = useRouter();

 const handleLogin = () => {
  // Lógica de autenticação
  router.replace('/(tabs)/index');
 };

 return (
  <View style={styles.container}>
   <Text style={styles.text}>Login Screen</Text>
   
  <Input />

   
  <View style={styles.conatinerButton}>
     <Button title="Login" onPress={handleLogin} />
  </View>
   
   
   
  </View>
 );
};
const styles = StyleSheet.create({
 container: {
  backgroundColor: '#007BFF',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
 },
 text: {
  color: '#FFFFFF',
  fontSize: 16,
 },
 conatinerButton :{
  width: 250,
  backgroundColor: 'r#f10404',
 }
});

export default LoginScreen;