// External Dependencies
import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

// Internal Dependencies
import AccountManagementScreen from '../screens/AccountManagementScreen';
import EmailVerification from '../components/SignUp/EmailVerification';
import FirstScreen from '../screens/FirstScreen';
import HamburgerButton from '../components/Menu/HamburgerButton';
import InfoModificationPage from '../components/AccountManagement/InfoModificationPage';
import LoginScreen from '../screens/LoginScreen';
import Menu from '../components/Menu/Menu';
import SignUp from '../components/SignUp/SignUp';


const AuthStack = createStackNavigator({
  First: FirstScreen,
  Login: LoginScreen,
  SignUp,
  EmailVerification,
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
