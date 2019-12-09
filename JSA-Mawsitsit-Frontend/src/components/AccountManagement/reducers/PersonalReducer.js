// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FETCH_USER_DETAIL_DATA,
  UPDATE_USER_DETAIL_DATA,
  UPDATE_USER_DETAIL_INFO,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  fetchedUserDetailData: {},
  updatedUserDetailData: {},
  userDetailForm: {},
};

const fetchUserDetailData = (state, action) => ({
  ...state,
  fetchedUserDetailData: action.fetchedUserDetailData,
});

const updateUserDetailData = (state, action) => ({
  ...state,
  fetchedUserDetailData: {
    ...state.fetchedUserDetailData,
    ...action.updatedUserDetailData,
  },
});

const updateUserDetailInfo = (state, action) => ({
  ...state,
  userDetailForm: {
    [action.prop]: action.value,
  },
});

export default createReducer(INITIAL_STATE, {
  [FETCH_USER_DETAIL_DATA]: fetchUserDetailData,
  [UPDATE_USER_DETAIL_DATA]: updateUserDetailData,
  [UPDATE_USER_DETAIL_INFO]: updateUserDetailInfo,
});
