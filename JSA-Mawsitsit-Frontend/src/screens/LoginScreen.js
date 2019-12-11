// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ImageBackground,
} from 'react-native';

// Internal Dependencies
import LoginStyle from '../styles/LoginStyle';
import Header from '../components/Login/Header';
import LoginForm from '../containers/loginFormContainer';
import Footer from '../components/Login/Footer';

// Local Variables
const { rootStyle } = LoginStyle;


// Component Definition
const LoginScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={rootStyle}>
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/564x/a7/3f/b6/a73fb617b48b1e37f39f380f3ba448f3.jpg' }}
        style={{ width: '100%', height: '100%' }}
        imageStyle={{ opacity: 0.4 }}
      >
        <Header />
        <LoginForm />
        <Footer navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

// Navigation Configuration
LoginScreen.navigationOptions = {
  headerShown: false,
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
LoginScreen.defaultProps = {
  navigation: {},
};

export default LoginScreen;
