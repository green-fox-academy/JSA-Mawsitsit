import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, TouchableOpacity,
} from 'react-native';
import {
  emailValidate, phoneNumberValidate, passwordValidate, passwordCheck,
} from '../../validation/validation';
import PasswordStrength from './PasswordStrength'
import registerStyles from './Styles';

const styles = StyleSheet.create(registerStyles);
const initState = {
  email: '',
  emailError: '',
  phoneNumber: '',
  phoneNumberError: '',
  password: '',
  passwordMessage: '',
  passwordConfirm: '',
  checkMessage: '',
};


const Register = () => {
  const [state, setState] = useState(initState);
  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const postResult = (object) => {
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    });
  };

  const handleSubmit = () => {
    const register = {
      email: state.email,
      phone_number: state.phoneNumber,
      password: state.password,
    };
    setState(initState);
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
      <Text style={state.emailError ? { ...textStyle, ...warningTextColor } : textStyle}>
        E-mail
      </Text>
      <TextInput
        style={state.emailError ? { ...textInputStyle, ...warningBorderColor } : textInputStyle}
        value={state.email}
        textContentType="emailAddress"
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={(value) => handleChange('email', value)}
        onBlur={(value) => {
          const emailError = emailValidate(value.nativeEvent.text);
          setState({
            ...state,
            emailError,
          });
        }}
      />
      <View>
        {Boolean(state.emailError)
          && <Text style={{ ...textStyle, ...warningTextColor }}>{state.emailError}</Text>}
      </View>
      <Text style={state.phoneNumberError ? { ...textStyle, ...warningTextColor } : textStyle}>
        Phone number
      </Text>
      <TextInput
        style={state.phoneNumberError
          ? { ...textInputStyle, ...warningBorderColor } : textInputStyle}
        value={state.phoneNumber}
        textContentType="telephoneNumber"
        autoCapitalize="none"
        placeholder="phone number"
        onChangeText={(value) => handleChange('phoneNumber', value)}
        onBlur={(value) => {
          const phoneNumberError = phoneNumberValidate(value.nativeEvent.text);
          setState({
            ...state,
            phoneNumberError,
          });
        }}
      />
      <View>
        {Boolean(state.phoneNumberError)
          && <Text style={{ ...textStyle, ...warningTextColor }}>{state.phoneNumberError}</Text>}
      </View>
      <Text style={state.passwordMessage ? { ...textStyle, ...warningTextColor } : textStyle}>
        Password
      </Text>
      <TextInput
        style={state.passwordMessage
          ? { ...textInputStyle, ...warningBorderColor } : textInputStyle}
        value={state.password}
        secureTextEntry
        textContentType="password"
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(value) => handleChange('password', value)}
        onBlur={(value) => {
          const passwordMessage = passwordValidate(value.nativeEvent.text);
          setState({
            ...state,
            passwordMessage,
          });
        }}
      />
      <View>
        {Boolean(state.passwordMessage) && (<PasswordStrength passwordMessage={state.passwordMessage} />)}
      </View>
      <Text style={state.checkMessage ? { ...textStyle, ...warningTextColor } : textStyle}>
        Password confirmation
      </Text>
      <TextInput
        style={state.checkMessage ? { ...textInputStyle, ...warningBorderColor } : textInputStyle}
        value={state.passwordConfirm}
        secureTextEntry
        textContentType="password"
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(value) => handleChange('passwordConfirm', value)}
        onBlur={(value) => {
          const checkMessage = passwordCheck(state.password, value.nativeEvent.text);
          setState({
            ...state,
            checkMessage,
          });
        }}
      />
      <View>
        {Boolean(state.checkMessage)
          && <Text style={{ ...textStyle, ...warningTextColor }}>{state.checkMessage}</Text>}
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={!(state.email && state.phoneNumber && state.password && state.password)}
        >
          <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
