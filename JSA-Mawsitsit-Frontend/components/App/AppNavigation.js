// External Dependencies
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

const PersonalDetailsStack = createStackNavigator({
  PersonalDetails,
});

const AppNavigation = createSwitchNavigator({
  Auth: AuthStack,
  PersonalDetailsStack,
});

export default createAppContainer(AppNavigation);
