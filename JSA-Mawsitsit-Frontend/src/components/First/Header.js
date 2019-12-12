// External Dependencies
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import FirstStyle from '../../styles/FirstStyle';

// Local Variables
const {
  headerStyle,
  headerTextStyle,
} = FirstStyle;

// Component Definition
const Header = () => (
  <View style={headerStyle}>
    <Text style={headerTextStyle}>J-PAY</Text>
  </View>
);

export default Header;
