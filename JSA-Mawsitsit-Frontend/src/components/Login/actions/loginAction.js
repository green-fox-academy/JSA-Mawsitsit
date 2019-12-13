import { URL } from 'react-native-dotenv';
import * as SecureStore from 'expo-secure-store';

const LOGIN_USER = 'LOGIN_USER';
const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO';

const fetchLoginAction = (object, navigation) => async (dispatch) => {
  try {
    const result = await fetch(`${URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object),
    });
    const loginResponse = await result.json();
    if (loginResponse.auth) {
      await SecureStore.setItemAsync('Mawsitsit_token', loginResponse.token);
      navigation.navigate('PersonalDetailsStack');
    }
    dispatch({
      type: LOGIN_USER,
      loginResponse,
    });
  } catch (error) {
    const loginResponse = {};
    loginResponse.error = 'Unable to connect to the server, please check the network！';
    dispatch({
      type: LOGIN_USER,
      loginResponse,
    });
  }
};

const updateLoginInfoAction = (name, value) => (dispatch) => {
  dispatch({
    type: UPDATE_LOGIN_INFO,
    name,
    value,
  });
};

export {
  LOGIN_USER,
  UPDATE_LOGIN_INFO,
  fetchLoginAction,
  updateLoginInfoAction,
};
