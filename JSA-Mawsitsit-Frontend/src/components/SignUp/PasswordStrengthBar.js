// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

// Internal Dependencies
import PasswordStrengthBarStyle from './styles/PasswordStrengthBarStyle';

// Local Variables
const {
  barContainerStyle,
  greatBarStyle,
  mediumBarStyle,
  rootStyle,
  strengthTextStyle,
  weakBarStyle,
} = PasswordStrengthBarStyle;

// Component Definition
const PasswordStrengthBar = (props) => {
  const { passwordStrength } = props;

  const getBarColors = (barType) => {
    const barColors = {
      Weak: {
        weakBarColor: 'red',
        mediumBarColor: 'rgb(185, 185, 185)',
        greatBarColor: 'rgb(185, 185, 185)',
      },
      Medium: {
        weakBarColor: 'orange',
        mediumBarColor: 'orange',
        greatBarColor: 'rgb(185, 185, 185)',
      },
      Great: {
        weakBarColor: 'green',
        mediumBarColor: 'green',
        greatBarColor: 'green',
      },
    };
    return barColors[passwordStrength][barType];
  };

  return (
    <View style={rootStyle}>
      <View style={barContainerStyle}>
        <View style={[weakBarStyle, { backgroundColor: `${getBarColors('weakBarColor')}` }]} />
        <View style={[mediumBarStyle, { backgroundColor: `${getBarColors('mediumBarColor')}` }]} />
        <View style={[greatBarStyle, { backgroundColor: `${getBarColors('greatBarColor')}` }]} />
      </View>
      <Text style={strengthTextStyle}>{passwordStrength}</Text>
    </View>
  );
};

// Prop Validations
PasswordStrengthBar.propTypes = {
  passwordStrength: PropTypes.string,
};

PasswordStrengthBar.defaultProps = {
  passwordStrength: '',
};

export default PasswordStrengthBar;
