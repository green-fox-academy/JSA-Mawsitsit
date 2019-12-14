// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Text,
} from 'native-base';
import {
  ImageBackground,
  KeyboardAvoidingView,
  View,
} from 'react-native';

// Internal Dependencies
import LinkButton from '../SharedUnits/LinkButton';
import SignUpForm from './SignUpForm';
import SignUpStyle from './styles/SignUpStyle';

// Local Variables
const {
  buttonContainerStyle,
  // logoStyle,
  signUpButtonStyle,
  signUpButtonTextStyle,
  rootStyle,
  variantLinkButtonTextStyle,
} = SignUpStyle;

// Component Definitions
const SignUp = (props) => {
  const { navigation } = props;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
    >
      <ImageBackground
        imageStyle={{ opacity: 0.65 }}
        source={{ uri: 'https://i.pinimg.com/564x/5a/0f/fe/5a0ffe73533de7e6f1f6e3926c809204.jpg' }}
        style={rootStyle}
      >
        {/* <Text style={logoStyle}>JPay</Text> */}
        <SignUpForm />
        <View style={buttonContainerStyle}>
          <Button
            onPress={() => {}}
            style={signUpButtonStyle}
          >
            <Text style={signUpButtonTextStyle}>Sign Up!</Text>
          </Button>
          <LinkButton
            linkText="Already an user? Sign in!"
            onPress={() => navigation.navigate('Login')}
            variantStyle={variantLinkButtonTextStyle}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

// Prop Validations
SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

SignUp.defaultProps = {
  navigation: {},
};

// Navigation Configuration
SignUp.navigationOptions = {
  headerShown: false,
};

export default SignUp;
