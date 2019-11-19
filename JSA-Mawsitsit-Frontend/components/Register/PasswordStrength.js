import React from 'react';
import PropTypes from 'prop-types';
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
  } = styles;

  const strengths = {
    'Weak password': {
      bar: 'weakbar',
      width: 120,
    },
    'Medium password': {
      bar: 'mediumbar',
      width: 60,
    },
    'Strong password': {
      bar: 'strongbar',
      width: 0,
    },
    'Password must at least 8 characters!': {
      bar: '',
      width: 0,
    }
  }
  const { bar, width } = strengths[props.passwordMessage]
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

PasswordStrength.propTypes = {
  passwordMessage: PropTypes.string,
};

PasswordStrength.defaultProps = {
  passwordMessage: '',
};

export default PasswordStrength;
