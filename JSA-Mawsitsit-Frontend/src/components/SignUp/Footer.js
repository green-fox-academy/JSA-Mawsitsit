// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Internal Dependencies
import RegisterStyle from './styles/SignUpStyle';
import LinkButton from '../SharedUnits/LinkButton';

// Local Variables
const {
  footerStyle,
  variantLinkButtonStyle,
} = RegisterStyle;


// Component Definition
const Footer = (props) => {
  const { navigation } = props;

  return (
    <View style={footerStyle}>
      <LinkButton
        linkText="Sign in to an existing account"
        variantStyle={variantLinkButtonStyle}
        onPress={() => navigation.navigate('Login')}
      />
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
