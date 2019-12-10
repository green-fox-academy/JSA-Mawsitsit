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
    isAutoCapital,
    placeholder,
    onChangeText,
  } = props;
  return (
    <View>
      <Item regular style={textInputStyle}>
        <Input
          autoCapitalize={isAutoCapital}
          secureTextEntry={placeholder === 'Password'}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </Item>
    </View>
  );
};

InputText.propTypes = {
  isAutoCapital: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  isAutoCapital: 'none',
};

export default InputText;
