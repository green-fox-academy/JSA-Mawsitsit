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
  VERIFY_EMAIL_FAIL,
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
  navigation.navigate('EmailVerification', {
    emailToVerify: userToSignUp.email,
  });
};

export const updateSignUpInfo = createActionCreator(
  UPDATE_SIGN_UP_INFO,
  'prop',
  'value',
);

export const verifyEmail = (emailVerificationCode, navigation) => async (dispatch) => {
  const { verified: emailVerified } = await fetchRequest('http://localhost:3001/verificationCode', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: emailVerificationCode }),
  });

  if (!emailVerified) return dispatch({ type: VERIFY_EMAIL_FAIL });

  return navigation.navigate('DrawerNavigation');
};
