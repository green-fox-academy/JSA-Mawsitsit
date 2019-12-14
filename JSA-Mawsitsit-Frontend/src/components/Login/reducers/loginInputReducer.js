import { UPDATE_LOGIN_INFO } from '../actions/loginAction';

const initLoginInput = {
  userIdentifier: '',
  password: '',
  rmberUserIdentifier: false,
  rmberPassword: false,
  autoLogin: false,
};

const loginInputReducer = (state = initLoginInput, action) => {
  if (action.type === UPDATE_LOGIN_INFO) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
  return state;
};

export default loginInputReducer;
