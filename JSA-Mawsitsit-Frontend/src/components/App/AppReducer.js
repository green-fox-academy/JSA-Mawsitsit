// External Dependencies
import { combineReducers } from 'redux';

// Internal Dependencies
import AccountManagementReducer from '../AccountManagement/reducers';

const AppReducer = combineReducers({
  AccountManagement: AccountManagementReducer,
});

export default AppReducer;
