// External Dependencies
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/rootReducer';

// Internal Dependencies
import AppNavigation from './src/navigation/AppNavigation';

const store = createStore(rootReducer, applyMiddleware(thunk));

// Component Definition
const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
