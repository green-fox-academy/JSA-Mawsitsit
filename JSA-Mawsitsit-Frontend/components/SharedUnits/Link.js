// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';
import { Button } from 'native-base';

// Internal Dependencies
import loginStyles from '../Login/Styles';

// Local Variables
const styles = StyleSheet.create(loginStyles);

const Link = (props) => {
  const {
    linkText,
    variantStyle,
  } = props;

  return (
    <View>
      <Button transparent>
        <Text style={{ ...styles.linkText, ...variantStyle }}>{linkText}</Text>
      </Button>
    </View>
  );
};

Link.propTypes = {
  linkText: PropTypes.string.isRequired,
  variantStyle: ViewPropTypes.style,
};
Link.defaultProps = {
  variantStyle: {},
};
export default Link;
