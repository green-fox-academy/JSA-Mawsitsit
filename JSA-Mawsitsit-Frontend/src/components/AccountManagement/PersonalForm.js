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
import {
  fetchUserDetailData,
  updateUserDetailInfo,
} from './actions/PersonalAction';

// Component Definition
const Personal = (props) => {
  const appNavigation = useContext(NavigationContext);

  const {
    onFetchUserDetailData,
    onUpdateUserDetailInfo,
    userDetailForm,
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
        onChange={(value) => onUpdateUserDetailInfo(key, value)}
        onNavigate={() => appNavigation.navigate('InfoModificationPage')}
        placeholder={placeholder}
        value={userDetailForm[key]}
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
  const { userDetailForm } = state.AccountManagement.Personal;
  return { userDetailForm };
};

Personal.propTypes = {
  userDetailForm: PropTypes.shape({
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
  onUpdateUserDetailInfo: PropTypes.func.isRequired,
};

Personal.defaultProps = {
  userDetailForm: {},
};

export default connect(mapStateToProps, {
  onFetchUserDetailData: fetchUserDetailData,
  onUpdateUserDetailInfo: updateUserDetailInfo,
})(Personal);
