// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Internal Dependencies
import RegisterStyle from '../../styles/RegisterStyle';
import LinkButton from '../SharedUnits/LinkButton';

// Local Variables
const {
  footerStyle,
  variantBackToSignInStyle,
} = RegisterStyle;


// Component Definition
const Footer = (props) => {
  const { navigation } = props;

  return (
    <View style={footerStyle}>
      <LinkButton
        linkText="Sign in to an existing account"
        variantStyle={variantBackToSignInStyle}
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

Footer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Footer;
