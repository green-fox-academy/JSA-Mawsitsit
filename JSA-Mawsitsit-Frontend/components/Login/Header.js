// External Dependencies
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import loginStyles from './Styles';

// Local Variables
const styles = StyleSheet.create(loginStyles);

// Component Definition
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>JSA ShenZhen</Text>
  </View>
);

export default Header;
