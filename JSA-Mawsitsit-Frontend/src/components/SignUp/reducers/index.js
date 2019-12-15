// Internal Dependencies
import { createReducer } from '../../App/RootUtilities';
import {
  SIGN_UP_USER_SUCCESS,
  UPDATE_SIGN_UP_INFO,
  VERIFY_EMAIL_FAIL,
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
  emailVerificationCode: '',
  emailVerificationError: '',
};

const signUpUserSuccess = () => ({ ...INITIAL_STATE });

const updateSignUpInfo = (state, action) => ({
  ...state,
  [action.prop]: action.value,
});

const verifyEmailFail = (state) => ({
  ...state,
  emailVerificationError: 'You may provide a wrong code. Please try again.',
});

export default createReducer(INITIAL_STATE, {
  [SIGN_UP_USER_SUCCESS]: signUpUserSuccess,
  [UPDATE_SIGN_UP_INFO]: updateSignUpInfo,
  [VERIFY_EMAIL_FAIL]: verifyEmailFail,
});
