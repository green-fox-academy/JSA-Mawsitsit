// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import LinkButton from '../SharedUnits/LinkButton';
import PersonalForm from './PersonalForm';
import PersonalStyles from '../../styles/PersonalStyle';
import ProgressBar from '../SharedUnits/ProgressBar';

// Local Variables
const {
  buttonContainerStyle,
  progressContainerStyle,
  progressTitleStyle,
  variantLinkButtonStyle,
  verifyTextStyle,
} = PersonalStyles;

// Component Definition
const Personal = (props) => {
  const { fetchedUserDetailData } = props;
  let userDetailDataCompleteness = 8;
  Object.values(fetchedUserDetailData).forEach((fetchedUserDetailValue) => {
    if (fetchedUserDetailValue === '' || fetchedUserDetailValue === false) {
      userDetailDataCompleteness -= 1;
    }
  });

  return (
    <View>
      <View style={progressContainerStyle}>
        <Text style={progressTitleStyle}>Please complete your personal details:</Text>
        <ProgressBar completeNess={userDetailDataCompleteness * 12.5} />
      </View>
      <PersonalForm />
      <View style={buttonContainerStyle}>
        <Text style={verifyTextStyle}>You have not verified your email.</Text>
        <LinkButton
          linkText="Click here to verify it."
          onPress={() => {}}
          variantStyle={variantLinkButtonStyle}
        />
        <Text style={verifyTextStyle}>You have not verified your identity.</Text>
        <LinkButton
          linkText="Click here to upload proof of ID."
          onPress={() => {}}
          variantStyle={variantLinkButtonStyle}
        />
      </View>
    </View>
  );
};

// Prop Validation
Personal.propTypes = {
  fetchedUserDetailData: PropTypes.shape({
    userId: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    birthday: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    address: PropTypes.string,
    isEmailVerified: PropTypes.bool,
    isDetailsVerified: PropTypes.bool,
  }),
};

Personal.defaultProps = {
  fetchedUserDetailData: {},
};

const mapStateToProps = (state) => {
  const { fetchedUserDetailData } = state.AccountManagement.Personal;
  return { fetchedUserDetailData };
};

export default connect(mapStateToProps, {})(Personal);
