// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  UPDATE_SIGN_UP_INFO,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  email: 'sacrednoone@gmail.com',
  phoneNumber: '21234567',
  password: 'password1',
  passwordConfirmation: 'password1',
  passwordStrength: 'Medium',
  emailEmailError: '',
  phoneNumberError: '',
  passwordError: '',
  passwordConfirmationError: '',
};

const updateSignUpInfo = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

export default createReducer(INITIAL_STATE, {
  [UPDATE_SIGN_UP_INFO]: updateSignUpInfo,
});
