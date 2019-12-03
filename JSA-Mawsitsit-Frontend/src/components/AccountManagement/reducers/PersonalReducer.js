// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FETCH_USER_DETAIL_DATA,
  UPDATE_USER_DETAIL_DATA,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  fetchedUserDetailData: {},
  updatedUserDetailData: {},
};

const fetchUserDetailData = (state, action) => ({
  ...state,
  fetchedUserDetailData: action.fetchedUserDetailData,
});

const updateUserDetailData = (state, action) => ({
  ...state,
  updatedUserDetailData: action.updatedUserDetailData,
});

export default createReducer(INITIAL_STATE, {
  [FETCH_USER_DETAIL_DATA]: fetchUserDetailData,
  [UPDATE_USER_DETAIL_DATA]: updateUserDetailData,
});
