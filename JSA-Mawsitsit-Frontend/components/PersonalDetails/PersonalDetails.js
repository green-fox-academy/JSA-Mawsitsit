// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  headerLeft: (
    <MaterialCommunityIcons name="menu" />
  ),
};

export default PersonalDetails;
