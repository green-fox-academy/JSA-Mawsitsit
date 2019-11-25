// External Dependencies
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Component Definition
const PersonalDetails = () => (
  <View>
    <Text>Welcome to Personal Details page~</Text>
  </View>
);

// Navigation Configuration
PersonalDetails.navigationOptions = {
  headerTitle: 'Personal Details',
};

export default PersonalDetails;
