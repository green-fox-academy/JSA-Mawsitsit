// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';

// Internal Dependencies
import { fetchUserDetailData } from './actions/PersonalAction';

// Component Definition
const Personal = (props) => {
  const {
    fetchedUserDetailData,
    onFetchUserDetailData,
  } = props;
  console.log(fetchedUserDetailData);

  useEffect(() => {
    onFetchUserDetailData();
  }, [onFetchUserDetailData]);

  return (
    <View>
      <Text>Welcome to Personal Page</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { fetchedUserDetailData } = state.AccountManagement.Personal;
  return { fetchedUserDetailData };
};

Personal.propTypes = {
  fetchedUserDetailData: PropTypes.shape({
    user_id: PropTypes.number,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    last_name: PropTypes.string,
    first_name: PropTypes.string,
    address: PropTypes.string,
    isEmailVerified: PropTypes.bool,
    isDetailsVerified: PropTypes.bool,
  }),
  onFetchUserDetailData: PropTypes.func.isRequired,
};

Personal.defaultProps = {
  fetchedUserDetailData: {},
};

export default connect(mapStateToProps, {
  onFetchUserDetailData: fetchUserDetailData,
})(Personal);
