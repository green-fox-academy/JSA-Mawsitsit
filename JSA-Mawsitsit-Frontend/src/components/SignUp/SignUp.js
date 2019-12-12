// External Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import {
  Button,
  Text,
} from 'native-base';
import { ImageBackground } from 'react-native';

// Internal Dependencies
import SignUpForm from './SignUpForm';
import SignUpStyle from './styles/SignUpStyle';

// Local Variables
const {
  logoStyle,
  signUpButtonStyle,
  signUpButtonTextStyle,
  rootStyle,
} = SignUpStyle;

// Component Definitions
const SignUp = () => (
  <ImageBackground
    imageStyle={{ opacity: 0.65 }}
    source={{ uri: 'https://i.pinimg.com/564x/5a/0f/fe/5a0ffe73533de7e6f1f6e3926c809204.jpg' }}
    style={rootStyle}
  >
    <Text style={logoStyle}>JPay</Text>
    <SignUpForm />
    <Button
      onPress={() => {}}
      style={signUpButtonStyle}
    >
      <Text style={signUpButtonTextStyle}>Sign Up!</Text>
    </Button>
  </ImageBackground>
);

// Navigation Configuration
SignUp.navigationOptions = {
  headerShown: false,
};

export default SignUp;
