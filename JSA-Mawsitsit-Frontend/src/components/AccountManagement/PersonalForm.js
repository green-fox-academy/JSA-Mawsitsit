// External Dependencies
import PropTypes from 'prop-types';
import React, {
  useContext,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import { NavigationContext } from 'react-navigation';
import {
  View,
} from 'react-native';

// Internal Dependencies
import IconListItem from '../SharedUnits/IconListItem';
import { fetchUserDetailData } from './actions/PersonalAction';

// Component Definition
const Personal = (props) => {
  const appNavigation = useContext(NavigationContext);

  const {
    fetchedUserDetailData,
    onFetchUserDetailData,
  } = props;

  useEffect(() => {
    onFetchUserDetailData();
  }, [onFetchUserDetailData]);

  const personalInputData = [
    { icon: 'alpha-f-box-outline', key: 'firstName', placeholder: 'First Name' },
    { icon: 'alpha-l-box-outline', key: 'lastName', placeholder: 'Last Name' },
    { icon: 'cake', placeholder: 'Birthday', key: 'birthday' },
    { icon: 'cellphone', key: 'phoneNumber', placeholder: 'Phone Number' },
    { icon: 'email-outline', key: 'email', placeholder: 'Email' },
    { icon: 'home-outline', key: 'address', placeholder: 'Address' },
    { icon: 'account-card-details', key: 'idVerification', placeholder: 'ID Verification' },
  ];

  const personalInputs = personalInputData.map((personalInput) => {
    const {
      icon,
      key,
      placeholder,
    } = personalInput;

    return (
      <IconListItem
        icon={icon}
        key={`${placeholder}-${icon}`}
        onNavigate={() => {
          appNavigation.navigate('InfoModificationPage', {
            icon,
            key,
            placeholder,
            value: fetchedUserDetailData[key],
          });
        }}
        placeholder={placeholder}
        value={fetchedUserDetailData[key]}
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
  const {
    fetchedUserDetailData,
  } = state.AccountManagement.Personal;

  return {
    fetchedUserDetailData,
  };
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
