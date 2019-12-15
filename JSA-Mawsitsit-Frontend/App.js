// External Dependencies
import * as ExpoFont from 'expo-font';
import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

// Internal Dependencies
import AppNavigation from './src/navigation/AppNavigation';
import appStore from './src/store/appStore';

// Component Definition
const App = () => {
  const [appIsReady, setAppStatus] = useState(false);

  const loadFont = async () => {
    await ExpoFont.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'), // eslint-disable-line global-require
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line global-require
    });
    setAppStatus(true);
  };

  useEffect(() => {
    loadFont();
  }, []);

  return appIsReady
    ? (
      <Provider store={appStore}>
        <AppNavigation />
      </Provider>
    )
    : <AppLoading />;
};

export default App;
