// External Dependencies
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Local Variables
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Component Definition
const App = () => (
  <View style={styles.container}>
    <Text>JSA Mawsitsit Frontend</Text>
  </View>
);

export default App;
