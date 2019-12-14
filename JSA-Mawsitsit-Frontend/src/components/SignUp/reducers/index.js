// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  UPDATE_SIGN_UP_INFO,
} from '../../App/ActionTypes';

const INITIAL_STATE = {
  email: '',
  phoneNumber: '',
  password: '',
  passwordConfirmation: '',
  emailEmailError: '',
  phoneNumberError: '',
  passwordError: '',
  passwordConfirmationError: '',
  passwordStrength: '',
};

const updateSignUpInfo = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

export default createReducer(INITIAL_STATE, {
  [UPDATE_SIGN_UP_INFO]: updateSignUpInfo,
});
