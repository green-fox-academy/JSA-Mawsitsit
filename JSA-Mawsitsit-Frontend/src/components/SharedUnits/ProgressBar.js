// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import ProgressBarStyles from './styles/ProgressBarStyle';

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
    progress,
  } = props;

  const completenessBarStyleToUse = [completenessBarStyle, { width: `${progress}%` }];
  if (progress === 100) {
    completenessBarStyleToUse.push({ borderBottomRightRadius: 16, borderTopRightRadius: 16 });
  }

  return (
    <View style={rootStyle}>
      <View style={barContainerStyle}>
        <View style={completenessBarStyleToUse} />
        <View style={[inCompletenessBarStyle, { width: `${100 - progress}%` }]} />
      </View>
      <Text style={completeTextStyle}>{`${progress}%`}</Text>
    </View>
  );
};

// Prop Validation
ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
