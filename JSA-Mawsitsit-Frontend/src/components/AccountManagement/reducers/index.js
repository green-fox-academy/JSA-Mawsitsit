// External Dependencies
import { combineReducers } from 'redux';

// Internal Reducer
import PersonalReducer from './PersonalReducer';

const AccountManagementReducer = combineReducers({
  Financial: () => null,
  Security: () => null,
  Personal: PersonalReducer,
});

export default AccountManagementReducer;
