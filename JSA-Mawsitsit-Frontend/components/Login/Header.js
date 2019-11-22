// External Dependencies
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import styles from './Styles';

// Component Definition
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>JSA ShenZhen</Text>
  </View>
);

export default Header;
