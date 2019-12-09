// External Dependencies
import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

// Internal Dependencies
import FirstScreen from '../screens/FirstScreen';
import AccountManagementScreen from '../screens/AccountManagementScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HamburgerButton from '../components/Menu/HamburgerButton';
import Menu from '../components/Menu/Menu';


const AuthStack = createStackNavigator({
  First: FirstScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
});

const WelcomePageStack = createStackNavigator(
  {
    WelcomeScreen,
  },
  {
    defaultNavigationOptions: {
      headerLeft: () => <HamburgerButton />,
      headerTitle: 'Welcome page',
      headerStyle: {
        backgroundColor: '#3696F3',
      },
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
);

const PersonalDetailsStack = createStackNavigator(
  {
    AccountManagementScreen,
  },
  {
    defaultNavigationOptions: {
      headerLeft: () => <HamburgerButton />,
      headerTitle: 'Account management',
      headerStyle: {
        backgroundColor: '#3696F3',
      },
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
);


const DrawerNavigation = createDrawerNavigator({
  WelcomePageStack,
  PersonalDetailsStack,
}, {
  contentComponent: () => <Menu />,
  contentOptions: {
    activeTintColor: 'pink',
  },
  drawerWidth: 320,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});


const AppNavigation = createSwitchNavigator({
  AuthStack,
  DrawerNavigation,
});

export default createAppContainer(AppNavigation);
