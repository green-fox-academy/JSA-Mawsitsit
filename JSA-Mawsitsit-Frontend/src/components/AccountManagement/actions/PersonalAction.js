// Internal Dependencies
import { fetchRequest } from '../../App/RootUtilities';
import {
  FETCH_USER_DETAIL_DATA,
  UPDATE_USER_DETAIL_DATA,
} from '../../App/ActionTypes';

export const fetchUserDetailData = () => async (dispatch) => {
  // const fetchedUserDetailData = await fetchRequest('http://localhost:8081/personalDetails');
  dispatch({
    type: FETCH_USER_DETAIL_DATA,
    fetchedUserDetailData: {
      user_id: 1,
      email: 'email1@gmail.com',
      phone_number: '12345676',
      last_name: '',
      first_name: '',
      address: '',
      isEmailVerified: false,
      isDetailsVerified: false,
    },
  });
};

export const updateUserDetailData = () => async (dispatch) => {
  const updatedUserDetailData = await fetchRequest('http://localhost:8081/personalDetails', {
    method: 'POST',
  });
  dispatch({
    type: UPDATE_USER_DETAIL_DATA,
    updatedUserDetailData,
  });
};
