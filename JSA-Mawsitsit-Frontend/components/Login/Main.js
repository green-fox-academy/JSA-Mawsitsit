// External Dependencies
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Internal Dependencies
import loginStyles from './Styles';
import Header from './Header';
import Input from './Input';
import Footer from './Footer';

// Local Variables
const styles = StyleSheet.create(loginStyles);

const Main = () => {
  const { rootStyle } = styles;

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
        <Footer />
      </LinearGradient>
    </View>
  );
};

export default Main;
