// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Internal Dependencies
import LoginStyle from '../../styles/LoginStyle';
import LinkButton from '../SharedUnits/LinkButton';

// Local Variables
const {
  footerStyle,
  footerFrameStyle,
  variantPswStyle,
} = LoginStyle;


// Component Definition
const Footer = (props) => {
  const { navigation } = props;

  return (
    <View style={footerStyle}>
      <View style={footerFrameStyle}>
        <LinkButton
          linkText="Create account"
          variantStyle={variantPswStyle}
          onPress={() => navigation.navigate('Register')}
        />
        <LinkButton
          linkText="Forgot password?"
          variantStyle={variantPswStyle}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

Footer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

Footer.defaultProps = {
  navigation: {},
};

export default Footer;
