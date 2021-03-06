// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Internal Dependencies
import IconInput from '../SharedUnits/IconInput';
import PasswordStrengthBar from './PasswordStrengthBar';
import SignUpFormStyle from './styles/SignUpFormStyle';
import validateSignUp from '../App/Validations';
import { updateSignUpInfo } from './actions/SignUpAction';

// Local Variables
const {
  rootStyle,
} = SignUpFormStyle;

// Component Definitions
const SignUpForm = (props) => {
  const {
    onUpdateSignUpInfo,
    signUpForm,
  } = props;

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
    const value = signUpForm[key];
    const errorText = signUpForm[`${key}Error`];
    const validationToUse = validateSignUp[key];

    return (
      <View key={key}>
        <IconInput
          errorText={errorText}
          icon={icon}
          isSecureTextEntry={Boolean(key === 'password' || key === 'passwordConfirmation')}
          onBlur={() => {
            if (key === 'passwordConfirmation') {
              return onUpdateSignUpInfo(`${key}Error`, validationToUse(signUpForm.password, value));
            }
            return onUpdateSignUpInfo(`${key}Error`, validationToUse(value));
          }}
          onChange={(valueToUpdate) => {
            onUpdateSignUpInfo(key, valueToUpdate);
            if (key === 'password') {
              onUpdateSignUpInfo('passwordStrength', validateSignUp.passwordStrength(valueToUpdate));
            }
          }}
          placeholder={placeholder}
          value={value}
        />
        {Boolean(key === 'password' && signUpForm.password.length > 7) && (
          <PasswordStrengthBar
            passwordStrength={signUpForm.passwordStrength}
          />
        )}
      </View>
    );
  });

  return (
    <View style={rootStyle}>
      {signUpInputs}
    </View>
  );
};

// Prop Validations
SignUpForm.propTypes = {
  signUpForm: PropTypes.shape({
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    password: PropTypes.string,
    passwordConfirmation: PropTypes.string,
    passwordStrength: PropTypes.string,
    emailEmailError: PropTypes.string,
    phoneNumberError: PropTypes.string,
    passwordError: PropTypes.string,
    passwordConfirmationError: PropTypes.string,
  }),
  onUpdateSignUpInfo: PropTypes.func.isRequired,
};

SignUpForm.defaultProps = {
  signUpForm: PropTypes.shape({
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirmation: '',
    passwordStrength: '',
    emailEmailError: '',
    phoneNumberError: '',
    passwordError: '',
    passwordConfirmationError: '',
  }),
};

const mapStateToProps = (state) => {
  const { SignUpForm: signUpForm } = state;

  return { signUpForm };
};

export default connect(mapStateToProps, {
  onUpdateSignUpInfo: updateSignUpInfo,
})(SignUpForm);
