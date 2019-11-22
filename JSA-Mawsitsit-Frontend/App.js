// External Dependencies
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
// import Register from './components/Register/Register';
import Main from './components/Login/Main';

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
    <Main />
  </View>
);

export default App;
