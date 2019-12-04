// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import LoginStyle from '../../styles/LoginStyle';
import LinkButton from '../SharedUnits/LinkButton';

// Local Variables
const {
  footerStyle,
  footerFrameStyle,
  footerFrameInsideStyle,
  footerTextStyle,
  registerButtonStyle,
  forgetPasswordButtonStyle,
  footerBottomStyle,
} = LoginStyle;


// Component Definition
const Footer = (props) => {
  const { navigation } = props;

  return (
    <View style={footerStyle}>
      <View style={footerFrameStyle}>
        <Text style={footerTextStyle}>Don&apos;t have an account?</Text>
        <View style={footerFrameInsideStyle}>
          <LinkButton
            linkText="Click here"
            variantStyle={registerButtonStyle}
            onPress={() => navigation.navigate('Register')}
          />
          <Text style={footerTextStyle}>to create one!</Text>
        </View>
      </View>
      <View style={footerBottomStyle}>
        <LinkButton
          linkText="Fogotten password"
          variantStyle={forgetPasswordButtonStyle}
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
