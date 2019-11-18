import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import registerStyles from './Styles';


const styles = StyleSheet.create(registerStyles);

const PasswordStrength = (props) => {
  const {
    textStyle,
    warningTextColor,
    textInputStyle,
    warningBorderColor,
  } = styles;

  let bar = '';
  let width = 180;
  switch (props.passwordMessage) {
    case 'Weak password': bar = 'weakbar', width = 120; break;
    case 'Medium password': bar = 'mediumbar', width = 60; break;
    case 'Strong password': bar = 'strongbar', width = 0; break;
    default: bar = '', width = 0; break;
  }

  return (
    <View style={styles.passwordStrength}>
      <Text style={{ ...textStyle, ...warningTextColor }}>{props.passwordMessage}</Text>
      <View style={styles.bar}>
        <View style={styles[bar]} />
        <View style={{ ...styles.baseBar, width: width }} />
      </View>
    </View>
  );
}

export default PasswordStrength;
