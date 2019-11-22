// External Dependencies
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'native-base';

// Internal Dependencies
import LoginStyle from './LoginStyle';
import InputText from '../SharedUnits/InputText';
import Select from '../SharedUnits/Select';

// Local Variables
const {
  inputStyle,
  buttonStyle,
  btnTextStyle,
} = LoginStyle;


// Component Definition
const Input = () => (
  <View style={inputStyle}>
    <InputText placeholder="Email Address or Phone number" />
    <InputText placeholder="Password" />
    <Button bordered style={buttonStyle}>
      <Text style={btnTextStyle}> Login </Text>
    </Button>
    <Select selectItem="Remember Email/Phone" />
    <Select selectItem="Remember Password" />
    <Select selectItem="Auto login" />
  </View>
);

export default Input;
