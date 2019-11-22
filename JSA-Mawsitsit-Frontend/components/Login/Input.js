// External Dependencies
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'native-base';

// Internal Dependencies
import loginStyles from './Styles';
import InputText from '../SharedUnits/InputText';
import Select from '../SharedUnits/Select';

// Local Variables
const styles = StyleSheet.create(loginStyles);

// Component Definition
const Input = () => (
  <View style={styles.input}>
    <InputText placeholder="Email Address or Phone number" />
    <InputText placeholder="Password" />
    <Button bordered style={styles.button}>
      <Text style={styles.btnText}> Login </Text>
    </Button>
    <Select selectItem="Remember Email/Phone" />
    <Select selectItem="Remember Password" />
    <Select selectItem="Auto login" />
  </View>
);


export default Input;
