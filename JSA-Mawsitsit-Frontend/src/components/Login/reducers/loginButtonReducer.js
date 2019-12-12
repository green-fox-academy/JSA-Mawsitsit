import { LOGIN_USER } from '../actions/loginAction';

const initLoginResponse = {
  auth: false,
  token: '',
};

const loginButtonReducer = (state = initLoginResponse, action) => {
  if (action.type === LOGIN_USER) {
    return {
      ...action.response,
    };
  }
  return state;
};

export default loginButtonReducer;
