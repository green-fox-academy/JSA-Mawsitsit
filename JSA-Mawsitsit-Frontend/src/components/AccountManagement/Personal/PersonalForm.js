// External Dependencies
import PropTypes from 'prop-types';
import React, {
  useContext,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import { NavigationContext } from 'react-navigation';
import { ScrollView } from 'react-native';

// Internal Dependencies
import IconListItem from '../../SharedUnits/IconListItem';
import { fetchUserDetailData } from '../actions/PersonalAction';

// Component Definition
const Personal = (props) => {
  const appNavigation = useContext(NavigationContext);

  const {
    fetchedUserDetailData,
    onFetchUserDetailData,
    updatedUserDetailData,
  } = props;

  useEffect(() => {
    onFetchUserDetailData();
  }, [onFetchUserDetailData, updatedUserDetailData]);

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
            isEmailVerified: fetchedUserDetailData.isEmailVerified,
            value: fetchedUserDetailData[key],
          });
        }}
        placeholder={placeholder}
        value={fetchedUserDetailData[key]}
      />
    );
  });

  return (
    <ScrollView>
      {personalInputs}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const {
    fetchedUserDetailData,
    updatedUserDetailData,
  } = state.AccountManagement.Personal;

  return {
    fetchedUserDetailData,
    updatedUserDetailData,
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
    isEmailVerified: PropTypes.number,
    isDetailsVerified: PropTypes.number,
  }),
  onFetchUserDetailData: PropTypes.func.isRequired,
  updatedUserDetailData: PropTypes.shape({}),
};

Personal.defaultProps = {
  fetchedUserDetailData: {},
  updatedUserDetailData: {},
};

export default connect(mapStateToProps, {
  onFetchUserDetailData: fetchUserDetailData,
})(Personal);
