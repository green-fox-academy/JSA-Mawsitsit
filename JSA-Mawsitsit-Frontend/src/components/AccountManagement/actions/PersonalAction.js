// External Dependencies
import {
  camelCase,
  mapKeys,
  rearg,
} from 'lodash';


// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../App/RootUtilities';
import {
  FETCH_USER_DETAIL_DATA,
  UPDATE_USER_DETAIL_DATA,
  UPDATE_USER_DETAIL_INFO,
} from '../../App/ActionTypes';

export const fetchUserDetailData = () => async (dispatch) => {
  const fetchedUserDetailData = await fetchRequest('http://localhost:3001/personalDetails');
  const fetchedUserDetailDataToUse = mapKeys(fetchedUserDetailData, rearg(camelCase, 1));

  dispatch({
    type: FETCH_USER_DETAIL_DATA,
    fetchedUserDetailData: fetchedUserDetailDataToUse,
  });
};

// export const isEmailVerified = () => async (dispatch) => {
//   await fetchRequest('http://localhost:3001/sendEmail', {
//     method: 'POST',
//   });

//   // dispatch({
//   //   type: VERIFY_USER_EMAIL,
//   //   : fetchedUserDetailDataToUse,
//   // });
// };

export const updateUserDetailData = (userDetailDataToUpdate) => async (dispatch) => {
  // const updatedUserDetailData = await fetchRequest(`${URL}/personalDetails`, {
  //   method: 'POST',
  // });
  dispatch({
    type: UPDATE_USER_DETAIL_DATA,
    updatedUserDetailData: userDetailDataToUpdate,
  });
};

export const updateUserDetailInfo = createActionCreator(
  UPDATE_USER_DETAIL_INFO,
  'prop',
  'value',
);
