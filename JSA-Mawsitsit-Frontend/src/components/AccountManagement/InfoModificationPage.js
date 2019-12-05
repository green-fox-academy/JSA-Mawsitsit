// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Text } from 'native-base';

// Component Definition
const InfoModificationPage = () => (
  <Text>Hi there~ Now I am mimicing google~~~</Text>
);

InfoModificationPage.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <MaterialCommunityIcons
      color="white"
      name="arrow-left"
      onPress={() => navigation.goBack()}
      size={24}
      style={{ marginLeft: 12 }}
    />
  ),
  headerTitle: 'Info Modification',
});

export default InfoModificationPage;
