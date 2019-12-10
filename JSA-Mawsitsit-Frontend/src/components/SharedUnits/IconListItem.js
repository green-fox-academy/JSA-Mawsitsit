// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Body,
  Left,
  ListItem,
  Right,
  Text,
} from 'native-base';
import { View } from 'react-native';

// Internal Dependencies
import IconListItemStyles from '../../styles/IconListItemStyle';

// Local Variables
const {
  iconStyle,
  rootStyle,
} = IconListItemStyles;

// Component Definition
const IconInput = (props) => {
  const {
    icon,
    onNavigate,
    placeholder,
    value,
  } = props;

  return (
    <View style={rootStyle}>
      <ListItem
        icon
        onPress={onNavigate}
      >
        <Left>
          <MaterialCommunityIcons
            name={icon}
            size={32}
            style={iconStyle}
          />
        </Left>
        <Body>
          <Text>{placeholder}</Text>
          {Boolean(value) && <Text note>{value}</Text>}
        </Body>
        <Right>
          <MaterialCommunityIcons
            color="grey"
            name="chevron-right"
            size={24}
          />
        </Right>
      </ListItem>
    </View>
  );
};

// Prop Validation
IconInput.propTypes = {
  icon: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  onNavigate: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

IconInput.defaultProps = {
  onNavigate: null,
  value: '',
};

export default IconInput;
