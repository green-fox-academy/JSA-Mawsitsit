// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Item, Input } from 'native-base';

// Internal Dependencies
import LoginStyle from '../../styles/LoginStyle';

// Local Variables
const { textInputStyle } = LoginStyle;

// Component Definition
const InputText = (props) => {
  const {
    placeholder,
    onChangeText,
  } = props;
  return (
    <View>
      <Item regular style={textInputStyle}>
        <Input
          secureTextEntry={placeholder === 'Password'}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </Item>
    </View>
  );
};

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default InputText;
