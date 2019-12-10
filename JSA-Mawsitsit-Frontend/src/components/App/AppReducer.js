// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AccountManagementReducer from '../AccountManagement/reducers';
import loginReducer from '../../reducers/loginReducer';

const AppReducer = combineReducers({
  AccountManagement: AccountManagementReducer,
  loginForm: loginReducer,
});

export default AppReducer;
