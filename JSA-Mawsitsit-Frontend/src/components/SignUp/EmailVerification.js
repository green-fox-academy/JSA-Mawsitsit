// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'native-base';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import EmailVerificationStyle from './styles/EmailVerificationStyle';
import IconInput from '../SharedUnits/IconInput';
import LinkButton from '../SharedUnits/LinkButton';
import {
  updateSignUpInfo,
  verifyEmail,
} from './actions/SignUpAction';

// Local Variables
const {
  emailVerificationTitleStyle,
  emailVerificationSubtitleStyle,
  inputContainerStyle,
  rootStyle,
  titleContainerStyle,
  verifyButtonStyle,
  verifyButtonTextStyle,
  variantLinkButtonTextStyle,
} = EmailVerificationStyle;

const VerificationScreen = (props) => {
  const {
    emailVerificationCode,
    emailVerificationError,
    navigation,
    onUpdateSignUpInfo,
    onVerifyEmail,
  } = props;
  // const { emailToVerify } = navigation.state.params;
  const emailToVerify = 'sacrednoone@gmail.com';

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
        <View style={titleContainerStyle}>
          <Text style={emailVerificationTitleStyle}>Email Verification</Text>
          <Text style={emailVerificationSubtitleStyle}>{`Please enter the 6 alphanumeric code sent to ${emailToVerify}`}</Text>
        </View>
        <View style={inputContainerStyle}>
          <IconInput
            errorText={emailVerificationError}
            icon="shield-key-outline"
            onChange={(value) => onUpdateSignUpInfo('emailVerificationCode', value)}
            placeholder="Email Verification Code"
            value={emailVerificationCode}
          />
        </View>
        <Button
          onPress={() => onVerifyEmail(emailVerificationCode, navigation)}
          style={verifyButtonStyle}
        >
          <Text style={verifyButtonTextStyle}>Verify!</Text>
        </Button>
        <LinkButton
          linkText="Resend the email."
          onPress={() => {}}
          variantStyle={variantLinkButtonTextStyle}
        />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

// Prop Validations
VerificationScreen.propTypes = {
  emailVerificationCode: PropTypes.string,
  emailVerificationError: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        emailToVerify: PropTypes.string.isRequired,
      }),
    }),
  }),
  onUpdateSignUpInfo: PropTypes.func.isRequired,
  onVerifyEmail: PropTypes.func.isRequired,
};

VerificationScreen.defaultProps = {
  emailVerificationCode: '',
  emailVerificationError: '',
  navigation: {},
};

// Navigation Configuration
VerificationScreen.navigationOptions = {
  headerShown: false,
};

const mapStateToProps = (state) => {
  const {
    emailVerificationCode,
    emailVerificationError,
  } = state.SignUpForm;

  return {
    emailVerificationCode,
    emailVerificationError,
  };
};

export default connect(mapStateToProps, {
  onUpdateSignUpInfo: updateSignUpInfo,
  onVerifyEmail: verifyEmail,
})(VerificationScreen);
