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
import LoginStyle from '../Login/LoginStyle';

// Local Variables
const { linkTextStyle } = LoginStyle;


// Component Definition
const Link = (props) => {
  const {
    linkText,
    variantStyle,
  } = props;

  return (
    <View>
      <Button transparent>
        <Text style={{ ...linkTextStyle, ...variantStyle }}>{linkText}</Text>
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
