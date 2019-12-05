// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Text,
} from 'native-base';
import { View } from 'react-native';

// Internal Dependencies
import IconInput from '../SharedUnits/IconInput';
import InfoModificationPageStyles from '../../styles/InfoModificationPageStyle';

// Local Variables
const {
  doneButtonStyle,
  doneButtonTextStyle,
  modificationTitleContainerStyle,
  modificationTitleStyle,
  modificationSubtitleStyle,
} = InfoModificationPageStyles;

// Component Definition
const InfoModificationPage = (props) => {
  const { navigation } = props;
  const {
    icon,
    key,
    onChange,
    placeholder,
    value,
  } = navigation.state.params;

  return (
    <View>
      <View style={modificationTitleContainerStyle}>
        <Text style={modificationTitleStyle}>{placeholder}</Text>
        <Text
          note
          style={modificationSubtitleStyle}
        >
          {`Indicating your ${placeholder} below lets JPay know how to work better for you.`}
        </Text>
      </View>
      <IconInput
        icon={icon}
        onChange={(valueToUpdate) => onChange(key, valueToUpdate)}
        placeholder={placeholder}
        value={value}
      />
      <Button
        style={doneButtonStyle}
        transparent
      >
        <Text style={doneButtonTextStyle}>DONE</Text>
      </Button>
    </View>
  );
};

// Prop Validation
InfoModificationPage.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.string,
      }),
    }),
  }),
};

InfoModificationPage.defaultProps = {
  navigation: {},
};

// Navigation Configuration
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
