// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'native-base';

// Internal Dependencies
import LoginStyle from '../../styles/LoginStyle';

// Local Variables
const { linkTextStyle } = LoginStyle;


// Component Definition
const LinkButton = (props) => {
  const {
    linkText,
    variantStyle,
    onPress,
  } = props;

  return (
    <View>
      <Button transparent onPress={onPress}>
        <Text style={{ ...linkTextStyle, ...variantStyle }}>{linkText}</Text>
      </Button>
    </View>
  );
};

LinkButton.propTypes = {
  linkText: PropTypes.string.isRequired,
  variantStyle: Text.propTypes.style,
  onPress: PropTypes.func.isRequired,
};
LinkButton.defaultProps = {
  variantStyle: {},
};
export default LinkButton;
