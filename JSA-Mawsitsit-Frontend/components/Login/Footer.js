// External Dependencies
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import LoginStyle from './LoginStyle';
import Link from '../SharedUnits/Link';

// Local Variables
const {
  footerStyle,
  footerFrameStyle,
  footerFrameInsideStyle,
  footerTextStyle,
  variantClickStyle,
  variantPswStyle,
  footerBottomStyle,
} = LoginStyle;


// Component Definition
const Footer = () => (
  <View style={footerStyle}>
    <View style={footerFrameStyle}>
      <Text style={footerTextStyle}>Don&apos;t have an account?</Text>
      <View style={footerFrameInsideStyle}>
        <Link
          linkText="Click here"
          href="www.baidu.com"
          variantStyle={variantClickStyle}
        />
        <Text style={footerTextStyle}>to create one!</Text>
      </View>
    </View>
    <View style={footerBottomStyle}>
      <Link
        href="www.baidu.com"
        linkText="Fogotten password"
        variantStyle={variantPswStyle}
      />
    </View>
  </View>
);

export default Footer;
