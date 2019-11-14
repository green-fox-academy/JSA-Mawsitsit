// External Dependencies
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Register'

export default function App() {
  return (
    <View style={styles.container}>
      <Register></Register>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});

// Component Definition
const App = () => (
  <View style={styles.container}>
    <Text>JSA Mawsitsit Frontend</Text>
  </View>
);

export default App;
