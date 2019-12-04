// External Dependencies
import _ from 'lodash';

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
  // const fetchedUserDetailData = await fetchRequest('http://localhost:8081/personalDetails');
  const fetchedUserDetailData = {
    user_id: 1,
    first_name: '',
    last_name: '',
    birthday: '',
    phone_number: '12345676',
    email: 'email1@gmail.com',
    address: '',
    isEmailVerified: false,
    isDetailsVerified: false,
  };
  const fetchedUserDetailDataToUse = _.mapKeys(fetchedUserDetailData, _.rearg(_.camelCase, 1));

  dispatch({
    type: FETCH_USER_DETAIL_DATA,
    fetchedUserDetailData: fetchedUserDetailDataToUse,
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

export const updateUserDetailInfo = createActionCreator(
  UPDATE_USER_DETAIL_INFO,
  'prop',
  'value',
);
