// External Dependencies
import ReduxThunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

// Internal Dependencies
import RootReducer from '../reducers/RootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore = createStore(RootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default appStore;
