// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ImageBackground,
} from 'react-native';

// Internal Dependencies
import FirstStyle from '../styles/FirstStyle';
import Header from '../components/First/Header';
import Footer from '../components/First/Footer';

// Local Variables
const { rootStyle } = FirstStyle;

// Component Definition
const FirstScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={rootStyle}>
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/564x/a7/3f/b6/a73fb617b48b1e37f39f380f3ba448f3.jpg' }}
        style={{ width: '100%', height: '100%' }}
        imageStyle={{ opacity: 0.7 }}
      >
        <Header />
        <Footer navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

// Navigation Configuration
FirstScreen.navigationOptions = {
  headerShown: false,
};

FirstScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default FirstScreen;
