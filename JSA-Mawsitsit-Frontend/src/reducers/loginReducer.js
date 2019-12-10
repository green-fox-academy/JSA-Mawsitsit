import { combineReducers } from 'redux';
import loginInputReducer from './loginInputReducer';
import loginButtonReducer from './loginButtonReducer';

const loginReducer = combineReducers({
  loginInput: loginInputReducer,
  loginResponse: loginButtonReducer,
});

export default loginReducer;
