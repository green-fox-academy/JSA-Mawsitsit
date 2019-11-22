// External Dependencies
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import styles from './Styles';
import Link from '../SharedUnits/Link';

// Component Definition
const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.footerFrame}>
      <Text style={styles.footerText}>Don&apos;t have an account?</Text>
      <View style={styles.footerFrameInside}>
        <Link
          linkText="Click here"
          href="www.baidu.com"
          variantStyle={styles.variantClick}
        />
        <Text style={styles.footerText}>to create one!</Text>
      </View>
    </View>
    <View style={styles.footerBottom}>
      <Link
        href="www.baidu.com"
        linkText="Fogotten password"
        variantStyle={styles.variantPSW}
      />
    </View>
  </View>
);

export default Footer;
