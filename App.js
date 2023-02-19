// @flow
import * as React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';

import Navigations from './src/navigations/Navigations';

const App = (): React.Node => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigations />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
