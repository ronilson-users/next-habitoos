import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SignInScreen = () => {
 const router = useRouter();

 const handleSignIn = () => {
  // Lógica de autenticação
  router.replace('/home');
 };

 return (
  <View style={styles.container}>
   <Text style={styles.text}>Sign In Screen</Text>
   <Button title="Sign In" onPress={handleSignIn} />
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
});

export default SignInScreen;