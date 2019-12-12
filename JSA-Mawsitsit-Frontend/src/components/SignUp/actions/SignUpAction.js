// External Dependencies
// import { URL } from 'react-native-dotenv';

// Internal Dependencies
import {
  createActionCreator,
  // fetchRequest,
} from '../../App/RootUtilities';
import {
  UPDATE_SIGN_UP_INFO,
} from '../../App/ActionTypes';

export const signUpUser = () => () => {};

export const updateSignUpInfo = createActionCreator(
  UPDATE_SIGN_UP_INFO,
  'prop',
  'value',
);
