// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import {
  ImageBackground,
  KeyboardAvoidingView,
  View,
} from 'react-native';

// Internal Dependencies
import LinkButton from '../SharedUnits/LinkButton';
import SignUpForm from './SignUpForm';
import SignUpStyle from './styles/SignUpStyle';
import { signUpUser } from './actions/SignUpAction';

// Local Variables
const {
  buttonContainerStyle,
  signUpButtonStyle,
  signUpButtonTextStyle,
  rootStyle,
  variantLinkButtonTextStyle,
} = SignUpStyle;

// Component Definitions
const SignUp = (props) => {
  const {
    navigation,
    onSignUpUser,
    userToSignUp,
  } = props;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
    >
      <ImageBackground
        imageStyle={{ opacity: 0.65 }}
        source={{ uri: 'https://i.pinimg.com/564x/a7/3f/b6/a73fb617b48b1e37f39f380f3ba448f3.jpg' }}
        style={rootStyle}
      >
        <SignUpForm />
        <View style={buttonContainerStyle}>
          <Button
            onPress={() => onSignUpUser(userToSignUp, navigation)}
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
  onSignUpUser: PropTypes.func.isRequired,
  userToSignUp: PropTypes.shape({
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    password: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  navigation: {},
  userToSignUp: PropTypes.shape({
    email: '',
    phoneNumber: '',
    password: '',
  }),
};

// Navigation Configuration
SignUp.navigationOptions = {
  headerShown: false,
};

const mapStateToProps = (state) => {
  const {
    email,
    phoneNumber,
    password,
  } = state.SignUpForm;

  return {
    userToSignUp: {
      email,
      phone_number: phoneNumber,
      password,
    },
  };
};

export default connect(mapStateToProps, {
  onSignUpUser: signUpUser,
})(SignUp);
