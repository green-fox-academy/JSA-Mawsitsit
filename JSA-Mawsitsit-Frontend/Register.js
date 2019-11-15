import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, TouchableOpacity,
} from 'react-native';
import { emailValidate, phoneNumberValidate, passwordValidate } from './validation';


const initState = {
  email: '',
  emailError: '',
  phone_number: '',
  phoneNumberError: '',
  password: '',
  passwordMessage: '',
  passwordConfirm: '',
};
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 20,
    width: '90%',
    backgroundColor: '#fff',

  },
  bar: {
    height: 8,
    width: 150,
    backgroundColor: '#48BBEC',
  },
  text: {
    marginTop: 10,
  },
  warningtext: {
    color: 'red',
    marginTop: 10,
  },
  textinput: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  buttontext: {
    color: 'white',
    fontSize: 23,
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordcheck: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 120,
    height: 60,
    width: 120,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Register = () => {
  const [state, setState] = useState(initState);
  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  // eslint-disable-next-line no-console
  console.log(state);
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
        value={state.phone_number}
        textContentType="telephoneNumber"
        autoCapitalize="none"
        placeholder="phone number"
        onChangeText={(value) => handleChange('phone_number', value)}
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
          <View style={styles.passwordcheck}>
            <Text style={styles.warningtext}>{state.passwordMessage}</Text>
            <View style={styles.bar} />
          </View>
        )}
      </View>
      <Text style={styles.text}>Password confirmation</Text>
      <TextInput
        style={styles.textinput}
        value={state.passwordConfirm}
        textContentType="password"
        autoCapitalize="none"
        placeholder="password"
      />
      <View>
        {Boolean(state.passwordConfirm)
          && <Text style={styles.warningtext}>Password has to match!</Text>}
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default Register;
