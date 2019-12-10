// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'native-base';
import {
  Text,
} from 'react-native';

// Internal Dependencies
import LinkButtonStyles from '../../styles/LinkButtonStyle';

// Local Variables
const { linkButtonTextStyle } = LinkButtonStyles;

// Component Definition
const LinkButton = (props) => {
  const {
    linkText,
    variantStyle,
    onPress,
  } = props;

  return (
    <Button
      onPress={onPress}
      transparent
    >
      <Text style={[linkButtonTextStyle, variantStyle]}>
        {linkText}
      </Text>
    </Button>
  );
};

// Prop Validation
LinkButton.propTypes = {
  linkText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  variantStyle: Text.propTypes.style,
};

LinkButton.defaultProps = {
  variantStyle: {},
};

export default LinkButton;
