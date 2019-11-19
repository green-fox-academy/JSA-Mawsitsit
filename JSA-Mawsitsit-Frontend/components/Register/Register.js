import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  emailValidate,
  phoneNumberValidate,
  passwordValidate,
  passwordCheck,
} from '../../validation/validation';
import PasswordStrength from './PasswordStrength'
import registerStyles from './Styles';
import { URL } from 'react-native-dotenv'

const styles = StyleSheet.create(registerStyles);
const initInputText = {
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirm: '',
};
const initInputError = {
  emailError: '',
  phoneNumberError: '',
  passwordMessage: '',
  checkMessage: '',
}

const Register = () => {
  const [inputText, setInputText] = useState(initInputText);
  const [inputError, setInputError] = useState(initInputError);
  const validated = (!Object.values(inputText).includes(''))
    && (!inputError.emailError && !inputError.phoneNumberError && !inputError.checkMessage);
  const handleChange = (name, value) => {
    setInputText({
      ...inputText,
      [name]: value,
    });
  };
  const postResult = (object) => {
    fetch(`${URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    });
  };

  const handleSubmit = () => {
    const register = {
      email: inputText.email,
      phone_number: inputText.phoneNumber,
      password: inputText.password,
    };
    setInputText(initInputText);
    setInputError(initInputError);
    postResult(register);
  };

  const {
    textStyle,
    warningTextColor,
    textInputStyle,
    warningBorderColor,
  } = styles;

  return (
    <View style={styles.container}>
      <Text style={inputError.emailError ? { ...textStyle, ...warningTextColor } : textStyle}>
        E-mail
      </Text>
      <TextInput
        style={inputError.emailError ? { ...textInputStyle, ...warningBorderColor } : textInputStyle}
        value={inputText.email}
        textContentType="emailAddress"
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={(value) => handleChange('email', value)}
        onBlur={() => {
          const emailError = emailValidate(inputText.email);
          setInputError({
            ...inputError,
            emailError,
          });
        }}
      />
      <View>
        {Boolean(inputError.emailError)
          && <Text style={{ ...textStyle, ...warningTextColor }}>{inputError.emailError}</Text>}
      </View>
      <Text style={inputError.phoneNumberError ? { ...textStyle, ...warningTextColor } : textStyle}>
        Phone number
      </Text>
      <TextInput
        style={inputError.phoneNumberError
          ? { ...textInputStyle, ...warningBorderColor } : textInputStyle}
        value={inputText.phoneNumber}
        textContentType="telephoneNumber"
        autoCapitalize="none"
        placeholder="phone number"
        onChangeText={(value) => handleChange('phoneNumber', value)}
        onBlur={() => {
          const phoneNumberError = phoneNumberValidate(inputText.phoneNumber);
          setInputError({
            ...inputError,
            phoneNumberError,
          });
        }}
      />
      <View>
        {Boolean(inputError.phoneNumberError)
          && <Text style={{ ...textStyle, ...warningTextColor }}>{inputError.phoneNumberError}</Text>}
      </View>
      <Text style={inputError.passwordMessage ? { ...textStyle, ...warningTextColor } : textStyle}>
        Password
      </Text>
      <TextInput
        style={inputError.passwordMessage
          ? { ...textInputStyle, ...warningBorderColor } : textInputStyle}
        value={inputText.password}
        secureTextEntry
        textContentType="password"
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(value) => {
          handleChange('password', value);
          const passwordMessage = passwordValidate(value);
          setInputError({
            ...inputError,
            passwordMessage,
          });
        }}
        onBlur={() => {
          const passwordMessage = passwordValidate(inputText.password);
          setInputError({
            ...inputError,
            passwordMessage,
          });
        }}
      />
      <View>
        {Boolean(inputError.passwordMessage) && (<PasswordStrength passwordMessage={inputError.passwordMessage} />)}
      </View>
      <Text style={inputError.checkMessage ? { ...textStyle, ...warningTextColor } : textStyle}>
        Password confirmation
      </Text>
      <TextInput
        style={inputError.checkMessage ? { ...textInputStyle, ...warningBorderColor } : textInputStyle}
        value={inputText.passwordConfirm}
        secureTextEntry
        textContentType="password"
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(value) => {
          handleChange('passwordConfirm', value);
          const checkMessage = passwordCheck(inputText.password, value);
          setInputError({
            ...inputError,
            checkMessage,
          });
        }}
        onBlur={() => {
          const checkMessage = passwordCheck(inputText.password, inputText.passwordConfirm);
          setInputError({
            ...inputError,
            checkMessage,
          });
        }}
      />
      <View>
        {Boolean(inputError.checkMessage)
          && <Text style={{ ...textStyle, ...warningTextColor }}>{inputError.checkMessage}</Text>}
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={!validated}
        >
          <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
