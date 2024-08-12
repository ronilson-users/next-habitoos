import React, { useState } from 'react';
    import { View, TextInput, Text, StyleSheet } from 'react-native';
    
    const Input = () => {
     const [text, setText] = useState('');
     
     return (
      <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Type something..."
      onChangeText={setText}
      value={text}
      />
      <Text>{text}</Text>
      </View>
      );
    };
    
    const styles = StyleSheet.create({
     container: {
      padding: 20,
     },
     input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
     },
    });
    
    export default Input;
    