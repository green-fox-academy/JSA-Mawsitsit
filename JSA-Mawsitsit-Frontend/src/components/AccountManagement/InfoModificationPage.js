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
    modificationSubtitle,
    placeholder,
    value,
  } = navigation.state.params;

  const modificationSubtitleToUse = modificationSubtitle
    || `Indicating your ${placeholder} below lets JPay know how to work better for you.`;

  return (
    <View>
      <View style={modificationTitleContainerStyle}>
        <Text style={modificationTitleStyle}>{placeholder}</Text>
        <Text
          note
          style={modificationSubtitleStyle}
        >
          {modificationSubtitleToUse}
        </Text>
      </View>
      <IconInput
        icon={icon}
        isSecureTextEntry={Boolean(key === 'password')}
        onChange={(valueToUpdate) => onUpdateUserDetailInfo(key, valueToUpdate)}
        placeholder={placeholder}
        value={userDetailForm[key] !== undefined ? userDetailForm[key] : value}
      />
      <Button
        style={doneButtonStyle}
        onPress={() => onUpdateUserDetailData(key, userDetailForm[key], navigation)}
        transparent
      >
        <Text style={doneButtonTextStyle}>DONE</Text>
      </Button>
    </View>
  );
};

// Prop Validation
InfoModificationPage.propTypes = {
  modificationSubtitle: PropTypes.string,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        modificationSubtitle: PropTypes.string,
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
  modificationSubtitle: '',
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
