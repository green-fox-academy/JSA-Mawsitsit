// External Dependencies
import ReduxThunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

// Internal Dependencies
import AppReducer from '../components/App/AppReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore = createStore(AppReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default appStore;
