// External Dependencies
import React from 'react';
import { Provider } from 'react-redux';

// Internal Dependencies
import AppNavigation from './src/navigation/AppNavigation';
import appStore from './src/store/appStore';

// Component Definition
const App = () => (
  <Provider store={appStore}>
    <AppNavigation />
  </Provider>
);

export default App;
