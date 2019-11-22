// External Dependencies
import React from 'react';
import {
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Internal Dependencies
import LoginStyle from '../styles/LoginStyle';
import Header from '../components/Login/Header';
import Input from '../components/Login/Input';
import Footer from '../components/Login/Footer';

// Local Variables
const { rootStyle } = LoginStyle;


// Component Definition
const LoginScreen = () => (
  <View style={rootStyle}>
    <LinearGradient
      colors={['#97a8e8', '#869fe7', '#437ee6', '#1269e5']}
      style={rootStyle}
      start={[0, 0]}
      end={[1, 1]}
    >
      <Header />
      <Input />
      <Footer />
    </LinearGradient>
  </View>
);

export default LoginScreen;
