// External Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Button,
  Icon,
  Text,
} from 'native-base';

// Internal Dependencies
import PersonalDetailsStyle from '../../styles/PersonalDetailsStyle';

// Local Variables
const {
  menuItemInsideStyle,
  menuBodyStyle,
  menuBodyTextStyle,
} = PersonalDetailsStyle;

const initState = { buttonColor: '#000' };

const MenuItem = (props) => {
  const [state, setState] = useState(initState);
  const {
    iconType,
    iconName,
    buttonText,
  } = props;


  const handleClick = () => {
    setState({
      ...state,
      buttonColor: 'rgb(69, 124, 245)',
    });
  };


  return (
    <View style={menuBodyStyle}>
      <View style={menuItemInsideStyle}>
        <Button transparent onPress={handleClick}>
          <Icon type={iconType} name={iconName} style={{ color: state.buttonColor }} />
          <Text style={{ ...menuBodyTextStyle, color: state.buttonColor }}>
            {buttonText}
          </Text>
        </Button>
      </View>
    </View>
  );
};

MenuItem.propTypes = {
  iconType: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
MenuItem.defaultProps = {
  iconType: 'AntDesign',
};

export default MenuItem;
