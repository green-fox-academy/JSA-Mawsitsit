// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import ProgressBarStyles from '../../styles/ProgressBarStyle';

// Local Variables
const {
  barContainerStyle,
  completenessBarStyle,
  completeTextStyle,
  inCompletenessBarStyle,
  rootStyle,
} = ProgressBarStyles;

// Component Definition
const ProgressBar = (props) => {
  const {
    completeNess,
  } = props;

  const completenessBarStyleToUse = [completenessBarStyle, { width: `${completeNess}%` }];
  if (completeNess === 100) {
    completenessBarStyleToUse.push({ borderBottomRightRadius: 16, borderTopRightRadius: 16 });
  }

  return (
    <View style={rootStyle}>
      <View style={barContainerStyle}>
        <View style={completenessBarStyleToUse} />
        <View style={[inCompletenessBarStyle, { width: `${100 - completeNess}%` }]} />
      </View>
      <Text style={completeTextStyle}>{`${completeNess}%`}</Text>
    </View>
  );
};

// Prop Validation
ProgressBar.propTypes = {
  completeNess: PropTypes.number.isRequired,
};

export default ProgressBar;
