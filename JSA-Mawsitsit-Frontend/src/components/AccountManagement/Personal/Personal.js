// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
// import LinkButton from '../SharedUnits/LinkButton';
import PersonalForm from './PersonalForm';
import PersonalStyles from '../styles/PersonalStyle';
import ProgressBar from '../../SharedUnits/ProgressBar';

// Local Variables
const {
  progressContainerStyle,
  progressTitleStyle,
} = PersonalStyles;

// Component Definition
const Personal = (props) => {
  const { fetchedUserDetailData } = props;
  let userDetailDataProgress = 8;
  Object.values(fetchedUserDetailData).forEach((fetchedUserDetailValue) => {
    if (fetchedUserDetailValue === '' || fetchedUserDetailValue === 0) {
      userDetailDataProgress -= 1;
    }
  });

  return (
    <View>
      <View style={progressContainerStyle}>
        <Text style={progressTitleStyle}>Please complete your personal details:</Text>
        <ProgressBar progress={userDetailDataProgress * 12.5} />
      </View>
      <PersonalForm />
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
    isEmailVerified: PropTypes.number,
    isDetailsVerified: PropTypes.number,
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
