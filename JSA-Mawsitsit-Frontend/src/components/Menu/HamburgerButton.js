import React, { useContext } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'native-base';
import { NavigationContext } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Component Definition
const HamburgerButton = () => {
  const navigation = useContext(NavigationContext);

  return (
    <View>
      <Button transparent onPress={navigation.openDrawer}>
        <MaterialCommunityIcons
          color="white"
          name="menu"
          size={24}
          style={{ marginLeft: 12 }}
        />
      </Button>
    </View>
  );
};

HamburgerButton.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }),
};
HamburgerButton.defaultProps = {
  navigation: {},
};

export default HamburgerButton;
