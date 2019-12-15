// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FETCH_USER_SECURE_DATA,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  fetchedUserSecureData: {
    password: 'password1',
  },
};

const fetchUserDetailData = (state, action) => ({
  ...state,
  fetchedUserSecureData: action.fetchedUserSecureData,
});

export default createReducer(INITIAL_STATE, {
  [FETCH_USER_SECURE_DATA]: fetchUserDetailData,
});
