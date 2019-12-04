// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Input,
  Item,
} from 'native-base';
import { View } from 'react-native';

// Internal Dependencies
import IconInputStyles from '../../styles/IconInputStyle';

// Local Variables
const {
  iconStyle,
  rootStyle,
} = IconInputStyles;

// Component Definition
const IconInput = (props) => {
  const {
    icon,
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <View style={rootStyle}>
      <Item>
        <MaterialCommunityIcons
          style={iconStyle}
          name={icon}
          size={24}
        />
        <Input
          onChangeText={onChange}
          placeholder={placeholder}
          value={value}
        />
      </Item>
    </View>
  );
};

// Prop Validation
IconInput.propTypes = {
  icon: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

IconInput.defaultProps = {
  value: '',
};

export default IconInput;
