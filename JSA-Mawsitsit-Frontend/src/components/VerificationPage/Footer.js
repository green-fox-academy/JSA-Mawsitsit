// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'native-base';

// Internal Dependencies
import FirstStyle from '../../styles/FirstStyle';
import VerificationStyle from '../../styles/VerificationStyle';

// Local Variables
const {
  footerStyle,
} = FirstStyle;

const {
  verificationButtonStyle,
  verificationButtonTextStyle,
} = VerificationStyle;


// Component Definition
const Footer = (props) => {
  const { onPress } = props;

  return (
    <View style={footerStyle}>
      <Button
        style={verificationButtonStyle}
        // onPress={() => navigation.navigate('Register')}
        onPress={onPress}
      >
        <Text style={verificationButtonTextStyle}>Let&apos;s verify</Text>
      </Button>
    </View>
  );
};

Footer.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default Footer;
