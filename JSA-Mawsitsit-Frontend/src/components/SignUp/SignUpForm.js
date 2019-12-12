// External Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';

// Internal Dependencies
import IconInput from '../SharedUnits/IconInput';
import SignUpFormStyle from './styles/SignUpFormStyle';

// Local Variables
const {
  rootStyle,
} = SignUpFormStyle;

// Component Definitions
const SignUpForm = () => {
  const signUpInputs = [
    { icon: 'email-outline', key: 'email', placeholder: 'Email' },
    { icon: 'cellphone', key: 'phoneNumber', placeholder: 'Phone Number' },
    { icon: 'lock-open-outline', key: 'password', placeholder: 'Password' },
    { icon: 'lock-outline', key: 'passwordConfirmation', placeholder: 'Password Confirmation' },
  ].map((signUpInput) => {
    const {
      icon,
      key,
      placeholder,
    } = signUpInput;

    return (
      <IconInput
        icon={icon}
        key={key}
        onChange={() => {}}
        placeholder={placeholder}
      />
    );
  });

  return (
    <View style={rootStyle}>
      {signUpInputs}
    </View>
  );
};

export default SignUpForm;
