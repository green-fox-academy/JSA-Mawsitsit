// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient
        colors={['#97a8e8', '#869fe7', '#437ee6', '#1269e5']}
        style={rootStyle}
        start={[0, 0]}
        end={[1, 1]}
      >
        <Header />
        <Footer navigation={navigation} />
      </LinearGradient>
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
