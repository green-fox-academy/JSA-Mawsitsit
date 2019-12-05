// External Dependencies
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavigationContext } from 'react-navigation';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'native-base';
import * as SecureStore from 'expo-secure-store';

// Internal Dependencies
import LoginStyle from '../../styles/LoginStyle';
import InputText from '../SharedUnits/InputText';
import Select from '../SharedUnits/Select';

// Local Variables
const {
  inputStyle,
  buttonStyle,
  btnTextStyle,
} = LoginStyle;

// Component Definition
const LoginForm = (props) => {
  const {
    loginInput,
    onUpdateLoginInfo,
    onFetchLogin,
  } = props;
  const navigation = useContext(NavigationContext);
  const validation = {
    rmberUserIdentifier: (loginInput.userIdentifier.length !== 0),
    rmberPassword: (loginInput.password.length !== 0),
    autoLogin: loginInput.rmberUserIdentifier && loginInput.rmberPassword,
  };

  const handleChange = (name, value) => {
    onUpdateLoginInfo(name, value);
    if (!validation.rmberUserIdentifier) {
      onUpdateLoginInfo('rmberUserIdentifier', false);
    }
    if (!validation.rmberPassword) {
      onUpdateLoginInfo('rmberPassword', false);
    }
    if (!validation.autoLogin) {
      onUpdateLoginInfo('autoLogin', false);
    }
  };

  const handleSelect = (name, value) => {
    if ((!loginInput[name] && validation[name]) || loginInput[name]) {
      onUpdateLoginInfo(name, value);
    }
  };

  const handleSubmit = async () => {
    const loginInfo = {
      user_identifier: loginInput.userIdentifier,
      password: loginInput.password,
    };
    const loginPreference = {
      rmberUserIdentifier: loginInput.rmberUserIdentifier,
      rmberPassword: loginInput.rmberPassword,
      autoLogin: loginInput.autoLogin,
    };
    await SecureStore.setItemAsync('Mawsitsit_login_preference', loginPreference.toString());
    onFetchLogin(loginInfo, navigation);
  };

  return (
    <View style={inputStyle}>
      <InputText
        autoCapitalize="none"
        placeholder="Email Address or Phone number"
        onChangeText={(value) => handleChange('userIdentifier', value)}
      />
      <InputText
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={(value) => handleChange('password', value)}
      />
      <Button
        bordered
        style={buttonStyle}
        onPress={handleSubmit}
      >
        <Text style={btnTextStyle}> Login </Text>
      </Button>
      <Select
        selectItem="Remember Email/Phone"
        selectValue={loginInput.rmberUserIdentifier}
        onChangeSelect={(value) => handleSelect('rmberUserIdentifier', value)}
      />
      <Select
        selectItem="Remember Password"
        selectValue={loginInput.rmberPassword}
        onChangeSelect={(value) => handleSelect('rmberPassword', value)}
      />
      <Select
        selectItem="Auto login"
        selectValue={loginInput.autoLogin}
        onChangeSelect={(value) => handleSelect('autoLogin', value)}
      />
    </View>
  );
};

LoginForm.propTypes = {
  loginInput: PropTypes.shape({
    userIdentifier: PropTypes.string,
    password: PropTypes.string,
    rmberUserIdentifier: PropTypes.bool,
    rmberPassword: PropTypes.bool,
    autoLogin: PropTypes.bool,
  }).isRequired,
  loginResponse: PropTypes.shape({
    auth: PropTypes.bool,
    token: PropTypes.string,
  }).isRequired,
  onFetchLogin: PropTypes.func.isRequired,
  onUpdateLoginInfo: PropTypes.func.isRequired,
};

export default LoginForm;
