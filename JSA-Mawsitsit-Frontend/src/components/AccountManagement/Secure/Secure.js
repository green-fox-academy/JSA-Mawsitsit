// External Dependencies
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { NavigationContext } from 'react-navigation';
import {
  View,
} from 'react-native';

// Internal Dependencies
import IconListItem from '../../SharedUnits/IconListItem';
// import SecurelStyles from '../styles/SecureStyle';

// Component Definition
const Personal = (props) => {
  const appNavigation = useContext(NavigationContext);

  const { fetchedUserSecureData } = props;
  console.log(fetchedUserSecureData);

  return (
    <View>
      <IconListItem
        icon="lock-outline"
        key="password-lock-outline"
        onNavigate={() => {
          appNavigation.navigate('InfoModificationPage', {
            icon: 'lock-outline',
            key: 'password',
            placeholder: 'Password',
            value: fetchedUserSecureData.password,
          });
        }}
        placeholder="Password"
      />
    </View>
  );
};

// Prop Validation
Personal.propTypes = {
  fetchedUserSecureData: PropTypes.shape({
    password: PropTypes.string,
  }),
};

Personal.defaultProps = {
  fetchedUserSecureData: {
    password: 'password1',
  },
};

const mapStateToProps = (state) => {
  const { fetchedUserSecureData } = state.AccountManagement.Secure;
  return { fetchedUserSecureData };
};

export default connect(mapStateToProps, {})(Personal);
