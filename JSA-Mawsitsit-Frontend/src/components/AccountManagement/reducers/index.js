// External Dependencies
import { combineReducers } from 'redux';

// Internal Reducer
import PersonalReducer from './PersonalReducer';
import SecureReducer from './SecureReducer';

const AccountManagementReducer = combineReducers({
  Financial: () => null,
  Secure: SecureReducer,
  Personal: PersonalReducer,
});

export default AccountManagementReducer;
