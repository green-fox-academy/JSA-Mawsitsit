// External Dependencies
import React from 'react';
import { View } from 'react-native';
import {
  Thumbnail,
  Text,
  Button,
  Icon,
} from 'native-base';

// Internal Dependencies
// import { DrawerItems } from 'react-navigation-drawer';
import MenuStyle from '../../styles/MenuStyle';
import MenuItem from '../SharedUnits/MenuItem';

// Local Variables
const {
  menuRootStyle,
  menuHeadStyle,
  menuHeadInsideStyle,
  menuHeadTextStyle,
  menuBackButtonStyle,
} = MenuStyle;

const menuHeaderImage = 'https://static.boredpanda.com/blog/wp-content/uploads/2018/03/cute-huskies-56-5aabc10b3847f__700.jpg';

// Component Definition
const Menu = () => (
  <View style={menuRootStyle}>
    <View style={menuHeadStyle}>
      <View style={menuHeadInsideStyle}>
        <Thumbnail source={{ uri: menuHeaderImage }} />
        <View>
          <Text style={menuHeadTextStyle}>JSA-Mawsitsit</Text>
          <Text style={menuHeadTextStyle} note>contact@epam.com</Text>
        </View>
      </View>
    </View>

    <MenuItem iconName="user" buttonText="Personal details" color="#000" />
    <MenuItem iconName="wallet" buttonText="Accounts" />
    <MenuItem iconName="areachart" buttonText="Investments" />
    <MenuItem iconName="gift" buttonText="Loans" />


    <View style={menuBackButtonStyle}>
      <Button transparent>
        <Icon name="back" type="AntDesign" />
        <Text>Back</Text>
      </Button>
    </View>

  </View>
);
export default Menu;
