import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, TouchableOpacity,
} from 'react-native';
import {
  emailValidate, phoneNumberValidate, passwordValidate, passwordCheck,
} from './validation';
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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.textinput}
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
        {Boolean(state.emailError) && <Text style={styles.warningtext}>{state.emailError}</Text>}
      </View>
      <Text style={styles.text}>Phone number</Text>
      <TextInput
        style={styles.textinput}
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
          && <Text style={styles.warningtext}>{state.phoneNumberError}</Text>}
      </View>
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.textinput}
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
        {Boolean(state.passwordMessage) && (
          <View style={styles.passwordStrength}>
            <Text style={styles.warningtext}>{state.passwordMessage}</Text>
            <View style={styles.bar} />
          </View>
        )}
      </View>
      <Text style={styles.text}>Password confirmation</Text>
      <TextInput
        style={styles.textinput}
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
          && <Text style={styles.warningtext}>{state.checkMessage}</Text>}
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
