import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import SingleProduct from '../screens/SingleProduct/SingleProduct';

const Stack = createNativeStackNavigator();

function Navigations(): React.Node {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Navigations;
