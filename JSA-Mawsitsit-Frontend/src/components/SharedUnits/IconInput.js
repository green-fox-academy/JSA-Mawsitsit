// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Input,
  Item,
  Text,
} from 'native-base';
import { View } from 'react-native';

// Internal Dependencies
import IconInputStyles from '../../styles/IconInputStyle';

// Local Variables
const {
  errorTextStyle,
  iconStyle,
  inputContainerStyle,
  rootStyle,
} = IconInputStyles;

// Component Definition
const IconInput = (props) => {
  const {
    errorText,
    icon,
    isAutoCapitalize,
    isSecureTextEntry,
    onBlur,
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <View style={rootStyle}>
      <View style={inputContainerStyle}>
        <Item error={Boolean(errorText)}>
          <MaterialCommunityIcons
            style={iconStyle}
            name={icon}
            size={24}
          />
          <Input
            autoCapitalize={isAutoCapitalize}
            secureTextEntry={isSecureTextEntry}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder={placeholder}
            value={value}
          />
        </Item>
      </View>
      {Boolean(errorText) && <Text style={errorTextStyle}>{errorText}</Text>}
    </View>
  );
};

// Prop Validation
IconInput.propTypes = {
  errorText: PropTypes.string,
  icon: PropTypes.string.isRequired,
  isAutoCapitalize: PropTypes.string,
  isSecureTextEntry: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

IconInput.defaultProps = {
  errorText: '',
  isAutoCapitalize: 'none',
  isSecureTextEntry: false,
  value: '',
  onBlur: () => { },
};

export default IconInput;
