// External Dependencies
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'native-base';

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

const initInputText = {
  userIdentifier: '',
  password: '',
};

const initInputSelect = {
  rmberUserIdentifier: false,
  rmberPassword: false,
  autoLogin: false,
};


// Component Definition
const Input = () => {
  const [inputText, setInputText] = useState(initInputText);
  const [inputSelect, setInputSelect] = useState(initInputSelect);
  const validation = {
    rmberUserIdentifier: (inputText.userIdentifier.length !== 0),
    rmberPassword: (inputText.password.length !== 0),
    autoLogin: inputSelect.rmberUserIdentifier && inputSelect.rmberPassword,
  };

  const handleChange = (name, value) => {
    setInputText({
      ...inputText,
      [name]: value,
    });

    // if (validation.rmberUserIdentifier) {
    //   setInputSelect({
    //     ...inputSelect,
    //     rmberUserIdentifier: false,
    //   });
    // }
    // if (validation.rmberPassword) {
    //   setInputSelect({
    //     ...inputSelect,
    //     rmberPassword: false,
    //   });
    // }
    // if (!validation.autoLogin) {
    //   setInputSelect({
    //     ...inputSelect,
    //     autoLogin: false,
    //   });
    // }
  };

  const handleSelect = (name, value) => {
    if ((!initInputSelect[name] && validation[name]) || inputSelect[name]) {
      setInputSelect({
        ...inputSelect,
        [name]: value,
      });
    }
  };

  return (
    <View style={inputStyle}>
      <InputText
        placeholder="Email Address or Phone number"
        onChangeText={(value) => handleChange('userIdentifier', value)}
      />
      <InputText
        placeholder="Password"
        onChangeText={(value) => handleChange('password', value)}
      />
      <Button bordered style={buttonStyle}>
        <Text style={btnTextStyle}> Login </Text>
      </Button>
      <Select selectItem="Remember Email/Phone" selectValue={inputSelect.rmberUserIdentifier} onChangeSelect={(value) => handleSelect('rmberUserIdentifier', value)} />
      <Select selectItem="Remember Password" selectValue={inputSelect.rmberPassword} onChangeSelect={(value) => handleSelect('rmberPassword', value)} />
      <Select selectItem="Auto login" selectValue={inputSelect.autoLogin} onChangeSelect={(value) => handleSelect('autoLogin', value)} />
    </View>
  );
};

export default Input;
