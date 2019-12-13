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
import HamburgerButton from '../components/Menu/HamburgerButton';
import InfoModificationPage from '../components/AccountManagement/InfoModificationPage';
import LoginScreen from '../screens/LoginScreen';
import VerificationScreen from '../screens/VerificationScreen';
import Menu from '../components/Menu/Menu';
import RegisterScreen from '../screens/RegisterScreen';


const AuthStack = createStackNavigator({
  VerificationScreen,
  First: FirstScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
});

const PersonalDetailsStack = createStackNavigator(
  {
    AccountManagementScreen,
    InfoModificationPage,
  },
  {
    defaultNavigationOptions: {
      headerLeft: () => <HamburgerButton />,
      headerTitle: 'Account Management',
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
