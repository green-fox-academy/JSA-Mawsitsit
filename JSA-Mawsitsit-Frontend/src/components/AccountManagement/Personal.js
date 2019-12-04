// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import PersonalForm from './PersonalForm';
import PersonalStyles from '../../styles/PersonalStyle';
import ProgressBar from '../SharedUnits/ProgressBar';

// Local Variables
const {
  progressContainerStyle,
  progressTitleStyle,
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
    </View>
  );
};

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
