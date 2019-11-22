// External Dependencies
import React from 'react';
import {
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Internal Dependencies
import LoginStyle from './LoginStyle';
import Header from './Header';
import Input from './Input';
import Footer from './Footer';

// Local Variables
const { rootStyle } = LoginStyle;


// Component Definition
const Main = () => (
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

export default Main;
