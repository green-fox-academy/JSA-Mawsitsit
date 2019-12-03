// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Internal Dependencies
import LoginStyle from '../styles/LoginStyle';
import Header from '../components/Login/Header';
import Input from '../components/Login/Input';
import Footer from '../components/Login/Footer';

// Local Variables
const { rootStyle } = LoginStyle;


// Component Definition
const LoginScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={rootStyle}>
      <LinearGradient
        colors={['#97a8e8', '#869fe7', '#437ee6', '#1269e5']}
        style={rootStyle}
        start={[0, 0]}
        end={[1, 1]}
      >
        <Header />
        <Input />
        <Footer navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

// Navigation Configuration
LoginScreen.navigationOptions = {
  headerShown: false,
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({}),
};

LoginScreen.defaultProps = {
  navigation: {},
};

export default LoginScreen;
