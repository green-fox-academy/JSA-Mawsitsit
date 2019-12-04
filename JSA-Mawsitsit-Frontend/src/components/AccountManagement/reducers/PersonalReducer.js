// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  FETCH_USER_DETAIL_DATA,
  UPDATE_USER_DETAIL_DATA,
  UPDATE_USER_DETAIL_INFO,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  fetchedUserDetailData: {},
  userDetailForm: {},
  updatedUserDetailData: {},
};

const fetchUserDetailData = (state, action) => ({
  ...state,
  fetchedUserDetailData: action.fetchedUserDetailData,
  userDetailForm: action.fetchedUserDetailData,
});

const updateUserDetailData = (state, action) => ({
  ...state,
  updatedUserDetailData: action.updatedUserDetailData,
});

const updateUserDetailInfo = (state, action) => ({
  ...state,
  userDetailForm: {
    ...state.userDetailForm,
    [action.prop]: action.value,
  },
});

export default createReducer(INITIAL_STATE, {
  [FETCH_USER_DETAIL_DATA]: fetchUserDetailData,
  [UPDATE_USER_DETAIL_DATA]: updateUserDetailData,
  [UPDATE_USER_DETAIL_INFO]: updateUserDetailInfo,
});
