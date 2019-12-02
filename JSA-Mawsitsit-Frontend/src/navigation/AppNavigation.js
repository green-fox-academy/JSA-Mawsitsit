// External Dependencies
import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  // DrawerItems,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

// Internal Dependencies
import AccountManagementScreen from '../screens/AccountManagementScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HamburgerButton from '../components/Menu/HamburgerButton';
import Menu from '../components/Menu/Menu';


const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

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
  PersonalDetailsStack,
}, {
  contentComponent: (props) => <Menu menuProps={props} />,
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
