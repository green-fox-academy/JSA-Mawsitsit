// External Dependencies
import { URL } from 'react-native-dotenv';
import { setItemAsync } from 'expo-secure-store';

// Internal Dependencies
import {
  createActionCreator,
  fetchRequest,
} from '../../App/RootUtilities';
import {
  SIGN_UP_USER_SUCCESS,
  UPDATE_SIGN_UP_INFO,
} from '../../App/ActionTypes';

export const signUpUser = (userToSignUp, navigation) => async (dispatch) => {
  const signedUpUserToken = await fetchRequest(`${URL}/register`, {
    body: JSON.stringify(userToSignUp),
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
  });
  await setItemAsync('Mawsitsit_token', signedUpUserToken.token);
  await fetchRequest(`${URL}/sendEmail`, {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
  });
  dispatch({
    type: SIGN_UP_USER_SUCCESS,
  });
  navigation.navigate('EmailVerification');
};

export const updateSignUpInfo = createActionCreator(
  UPDATE_SIGN_UP_INFO,
  'prop',
  'value',
);
