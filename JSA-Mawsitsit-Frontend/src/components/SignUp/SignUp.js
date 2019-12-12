// External Dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';

// Internal Dependencies
import SignUpForm from './SignUpForm';
import SignUpStyle from './styles/SignUpStyle';

// Local Variables
const {
  rootStyle,
} = SignUpStyle;

// Component Definitions
const SignUp = () => (
  <ImageBackground
    imageStyle={{ opacity: 0.7 }}
    source={{ uri: 'https://i.pinimg.com/564x/a7/3f/b6/a73fb617b48b1e37f39f380f3ba448f3.jpg' }}
    style={rootStyle}
  >
    <SignUpForm />
  </ImageBackground>
);

// Navigation Configuration
SignUp.navigationOptions = {
  headerShown: false,
};

export default SignUp;
