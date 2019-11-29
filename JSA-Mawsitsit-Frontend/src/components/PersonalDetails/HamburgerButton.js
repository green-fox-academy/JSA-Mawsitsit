import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';
import { Button } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Component Definition
const HamburgerButton = () => (
  <View>
    <Button transparent>
      <MaterialCommunityIcons
        color="white"
        name="menu"
        size={24}
      />
    </Button>
  </View>
);
export default HamburgerButton;
