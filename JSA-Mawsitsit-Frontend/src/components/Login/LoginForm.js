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
import IconInput from '../SharedUnits/IconInput';
import Select from '../SharedUnits/Select';
import { validateLoginPreference } from '../../../validation/validation';

// Local Variables
const {
  inputStyle,
  buttonStyle,
  btnTextStyle,
  loginFormStyle,
} = LoginStyle;

// Component Definition
const LoginForm = (props) => {
  const {
    loginInput,
    loginResponse,
    onUpdateLoginInfo,
    onFetchLogin,
  } = props;
  const navigation = useContext(NavigationContext);
  const preferenceValidator = validateLoginPreference(loginInput);

  const handleChange = (name, value) => {
    onUpdateLoginInfo(name, value);
    if (!preferenceValidator.rmberUserIdentifier) {
      onUpdateLoginInfo('rmberUserIdentifier', false);
    }
    if (!preferenceValidator.rmberPassword) {
      onUpdateLoginInfo('rmberPassword', false);
    }
    if (!preferenceValidator.autoLogin) {
      onUpdateLoginInfo('autoLogin', false);
    }
  };

  const handleSelect = (name, value) => {
    if ((!loginInput[name] && preferenceValidator[name]) || loginInput[name]) {
      onUpdateLoginInfo(name, value);
    }
  };

  const handleSubmit = async () => {
    const loginInfo = {
      user_identifier: loginInput.userIdentifier,
      password: loginInput.password,
    };
    if (loginInput.rmberUserIdentifier) {
      const loginDetail = {
        user_identifier: loginInput.userIdentifier,
      };
      if (loginInput.rmberPassword) {
        loginDetail.password = loginInput.password;
        loginDetail.autoLogin = loginInput.autoLogin;
      }
      await SecureStore.setItemAsync('Mawsitsit_login_detail', JSON.stringify(loginDetail))
        .catch((error) => console.log(error));
    }
    onFetchLogin(loginInfo, navigation);
  };

  return (
    <View style={inputStyle}>
      <View style={loginFormStyle}>
        <IconInput
          icon="account-circle-outline"
          autoCapitalize="none"
          onChange={(value) => handleChange('userIdentifier', value)}
          placeholder="Email Address or Phone number"
          value={loginInput.userIdentifier}
        />
        <IconInput
          icon="onepassword"
          autoCapitalize="none"
          isSecureTextEntry
          onChange={(value) => handleChange('password', value)}
          placeholder="Password"
          value={loginInput.password}
          errorText={loginResponse.error}
        />
      </View>
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
      <Button
        bordered
        style={buttonStyle}
        onPress={handleSubmit}
      >
        <Text style={btnTextStyle}>Sign in</Text>
      </Button>
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
    error: PropTypes.string,
  }).isRequired,
  onFetchLogin: PropTypes.func.isRequired,
  onUpdateLoginInfo: PropTypes.func.isRequired,
};

export default LoginForm;
