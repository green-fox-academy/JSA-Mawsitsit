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
import LinkButton from '../SharedUnits/LinkButton';

// Local Variables
const {
  footerStyle,
  footerFrameStyle,
  linkTextStyle,
  buttonStyle,
  btnTextStyle,
} = FirstStyle;


// Component Definition
const Footer = (props) => {
  const { navigation } = props;

  return (
    <View style={footerStyle}>
      <View style={footerFrameStyle}>
        <Button
          style={buttonStyle}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={btnTextStyle}>Sign up</Text>
        </Button>
        <LinkButton
          linkText="Already an user? Sign in!"
          variantStyle={linkTextStyle}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

Footer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Footer;
