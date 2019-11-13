import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TEXT } from 'react-native-dotenv';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{TEXT}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
