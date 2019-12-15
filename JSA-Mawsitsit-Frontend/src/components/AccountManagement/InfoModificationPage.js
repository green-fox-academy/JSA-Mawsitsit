// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import { View } from 'react-native';

// Internal Dependencies
import IconInput from '../SharedUnits/IconInput';
import InfoModificationPageStyles from './styles/InfoModificationPageStyle';

import {
  updateUserDetailData,
  updateUserDetailInfo,
} from './actions/PersonalAction';

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
  const {
    navigation,
    onUpdateUserDetailData,
    onUpdateUserDetailInfo,
    userDetailForm,
  } = props;

  const {
    icon,
    key,
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
        onChange={(valueToUpdate) => onUpdateUserDetailInfo(key, valueToUpdate)}
        placeholder={placeholder}
        value={userDetailForm[key] || value}
      />
      <Button
        style={doneButtonStyle}
        onPress={() => {
          onUpdateUserDetailData({ [key]: userDetailForm[key] });
          navigation.goBack();
        }}
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
    goBack: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.string,
      }),
    }),
  }),
  onUpdateUserDetailData: PropTypes.func.isRequired,
  onUpdateUserDetailInfo: PropTypes.func.isRequired,
  userDetailForm: PropTypes.shape({}).isRequired,
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

const mapStateToProps = (state) => ({
  userDetailForm: state.AccountManagement.Personal.userDetailForm,
});


export default connect(mapStateToProps, {
  onUpdateUserDetailData: updateUserDetailData,
  onUpdateUserDetailInfo: updateUserDetailInfo,
})(InfoModificationPage);
