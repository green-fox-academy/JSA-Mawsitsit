import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import RegisterStyle from '../../styles/RegisterStyle';

// Local Variables
const {
  warningTextColor,
  barStyle,
  baseBarStyle,
  textStyle,
  passwordStrengthStyle,
} = RegisterStyle;

// Component Definition
const PasswordStrength = (props) => {
  const strengths = {
    'Weak password': {
      bar: 'weakBarStyle',
      width: 120,
    },
    'Medium password': {
      bar: 'mediumBarStyle',
      width: 60,
    },
    'Strong password': {
      bar: 'strongBarStyle',
      width: 0,
    },
    'Password must at least 8 characters!': {
      bar: '',
      width: 0,
    },
  };

  const { passwordMessage } = props;
  const { bar, width } = strengths[passwordMessage];

  return (
    <View style={passwordStrengthStyle}>
      <Text style={{ ...textStyle, ...warningTextColor }}>{passwordMessage}</Text>
      <View style={barStyle}>
        <View style={RegisterStyle[bar]} />
        <View style={{ ...baseBarStyle, width }} />
      </View>
    </View>
  );
};

PasswordStrength.propTypes = {
  passwordMessage: PropTypes.string,
};

PasswordStrength.defaultProps = {
  passwordMessage: '',
};

export default PasswordStrength;
