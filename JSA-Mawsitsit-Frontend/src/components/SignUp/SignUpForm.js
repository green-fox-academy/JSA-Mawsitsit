// External Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';

// Internal Dependencies
import IconInput from '../SharedUnits/IconInput';

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
        placeholder={placeholder}
      />
    );
  });

  return (
    <View>
      {signUpInputs}
    </View>
  );
};

export default SignUpForm;
