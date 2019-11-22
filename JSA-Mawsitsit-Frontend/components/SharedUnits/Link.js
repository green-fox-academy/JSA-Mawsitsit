// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  ViewPropTypes,
} from 'react-native';
import { Button } from 'native-base';

// Internal Dependencies
import styles from '../Login/Styles';

// Component Definition
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
