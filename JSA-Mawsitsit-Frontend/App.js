// External Dependencies
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

// Internal Dependencies
// import RegisterScreen from './src/screens/Register/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

// Component Definition
const App = () => (
  <View style={styles.container}>
    {/* <Register /> */}
    <LoginScreen />
  </View>
);

export default App;
