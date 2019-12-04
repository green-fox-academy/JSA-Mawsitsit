// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';

// Internal Dependencies
import IconInput from '../SharedUnits/IconInput';
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

  const personalInputData = [
    { icon: 'alpha-f-box-outline', placeholder: 'First Name', value: fetchedUserDetailData.firstName },
    { icon: 'alpha-l-box-outline', placeholder: 'Last Name', value: fetchedUserDetailData.lastName },
    { icon: 'cake', placeholder: 'Birthday', value: fetchedUserDetailData.birthday },
    { icon: 'cellphone', placeholder: 'Phone Number', value: fetchedUserDetailData.phoneNumber },
    { icon: 'email-outline', placeholder: 'Email', value: fetchedUserDetailData.email },
    { icon: 'home-outline', placeholder: 'Address', value: fetchedUserDetailData.address },
  ];

  const personalInputs = personalInputData.map((personalInput) => {
    const {
      icon,
      placeholder,
      value,
    } = personalInput;

    return (
      <IconInput
        icon={icon}
        key={`${placeholder}-${icon}`}
        placeholder={placeholder}
        value={value}
      />
    );
  });

  return (
    <View>
      {personalInputs}
    </View>
  );
};

const mapStateToProps = (state) => {
  const { fetchedUserDetailData } = state.AccountManagement.Personal;
  return { fetchedUserDetailData };
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
  onFetchUserDetailData: PropTypes.func.isRequired,
};

Personal.defaultProps = {
  fetchedUserDetailData: {},
};

export default connect(mapStateToProps, {
  onFetchUserDetailData: fetchUserDetailData,
})(Personal);
