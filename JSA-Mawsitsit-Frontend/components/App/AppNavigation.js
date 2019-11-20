// External Dependencies
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Internal Dependencies
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Register from '../Register/Register';

const AuthStack = createStackNavigator({
  SignUp: Register,
});

const PersonalDetailsStack = createStackNavigator(
  {
    PersonalDetails,
  },
  {
    defaultNavigationOptions: {
      headerLeft: (
        <MaterialCommunityIcons
          color="white"
          name="menu"
          size={24}
        />
      ),
      headerStyle: {
        backgroundColor: '#3696F3',
      },
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
);

const AppNavigation = createSwitchNavigator({
  Auth: AuthStack,
  PersonalDetailsStack,
});

export default createAppContainer(AppNavigation);
