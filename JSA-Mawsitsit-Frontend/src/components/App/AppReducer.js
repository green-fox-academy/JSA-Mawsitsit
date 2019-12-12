// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AccountManagementReducer from '../AccountManagement/reducers';
import loginReducer from '../../reducers/loginReducer';
import SignUpFormReducer from '../SignUp/reducers';

const AppReducer = combineReducers({
  SignUpForm: SignUpFormReducer,
  AccountManagement: AccountManagementReducer,
  loginForm: loginReducer,
});

export default AppReducer;
