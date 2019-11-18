// External Dependencies
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Register from './components/Register/Register';

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
  },
});

// Component Definition
const App = () => (
  <View style={styles.container}>
    <Register />
  </View>
);

export default App;
