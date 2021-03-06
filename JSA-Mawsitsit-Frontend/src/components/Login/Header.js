// External Dependencies
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import LoginStyle from '../../styles/LoginStyle';

// Local Variables
const {
  headerStyle,
  headerTextStyle,
} = LoginStyle;

// Component Definition
const Header = () => (
  <View style={headerStyle}>
    <Text style={headerTextStyle}>J-PAY</Text>
  </View>
);

export default Header;
