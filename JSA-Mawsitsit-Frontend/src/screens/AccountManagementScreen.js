// External Dependencies
import React from 'react';

// Internal Dependencies
import SliderBar from '../components/PersonalDetails/SliderBar';

// Component Definition
const PersonalDetails = () => (
  <SliderBar />
);

// Navigation Configuration
PersonalDetails.navigationOptions = {
  headerTitle: 'Account management',
};

export default PersonalDetails;
