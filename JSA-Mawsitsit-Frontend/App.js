// External Dependencies
import React from 'react';
import { Provider } from 'react-redux';

// Internal Dependencies
import AppNavigation from './src/navigation/AppNavigation';
import store from './src/store/createStore';

// Component Definition
const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
