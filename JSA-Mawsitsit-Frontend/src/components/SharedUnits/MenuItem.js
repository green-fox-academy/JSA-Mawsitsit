// External Dependencies
import React, { useState, useContext } from 'react';
import { NavigationContext } from 'react-navigation';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Button,
  Icon,
  Text,
} from 'native-base';

// Internal Dependencies
import MenuStyle from '../../styles/MenuStyle';

// Local Variables
const {
  menuItemInsideStyle,
  menuBodyStyle,
  menuBodyTextStyle,
} = MenuStyle;

const initState = { buttonColor: '#000' };

const MenuItem = (props) => {
  const [state, setState] = useState(initState);
  const {
    iconType,
    iconName,
    buttonText,
    stackName,
  } = props;

  const navigation = useContext(NavigationContext);

  const onPressList = () => {
    setState({
      ...state,
      buttonColor: 'rgb(69, 124, 245)',
    });

    navigation.navigate(stackName);
    navigation.closeDrawer();
  };

  return (
    <View style={menuBodyStyle}>
      <View style={menuItemInsideStyle}>
        <Button transparent onPress={onPressList}>
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
  stackName: PropTypes.string,
};
MenuItem.defaultProps = {
  iconType: 'AntDesign',
  stackName: '',
};

export default MenuItem;
