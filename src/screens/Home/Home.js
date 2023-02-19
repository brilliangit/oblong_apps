// @flow
import * as React from 'react';
import { View, Text } from 'native-base';

import Colors from '../../themes/color';
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch';
import ProductList from '../../components/ProductList/ProductList';

const Home = ({ navigation }: any): React.Node => {
  return (
    <View>
      <HeaderSearch />
      <ProductList navigation={navigation} />
    </View>
  )
}

export default Home