// External Dependencies
import React from 'react';
import { View } from 'react-native';
import {
  Thumbnail,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';

// Internal Dependencies
import MenuStyle from '../../styles/MenuStyle';
import MenuItem from '../SharedUnits/MenuItem';

// Local Variables
const {
  menuRootStyle,
  menuHeadStyle,
  menuHeadInsideStyle,
  menuHeadTextStyle,
} = MenuStyle;

const menuHeaderImage = 'https://static.boredpanda.com/blog/wp-content/uploads/2018/03/cute-huskies-56-5aabc10b3847f__700.jpg';

// Component Definition
const Menu = () => (
  <View style={menuRootStyle}>
    <View style={menuHeadStyle}>
      <View style={menuHeadInsideStyle}>
        <Thumbnail source={{ uri: menuHeaderImage }} />
        <View>
          <Text style={menuHeadTextStyle}>JSA Mawsitsit</Text>
          <Text style={menuHeadTextStyle} note>contact@jpay.com</Text>
        </View>
      </View>
    </View>
    <MenuItem stackName="PersonalDetailsStack" iconName="user" buttonText="Personal details" color="#000" />
    <MenuItem iconName="wallet" buttonText="Accounts" />
    <MenuItem iconName="areachart" buttonText="Investments" />
    <MenuItem iconName="gift" buttonText="Loans" />
  </View>
);

Menu.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }),
};

Menu.defaultProps = {
  navigation: {},
};

export default Menu;
