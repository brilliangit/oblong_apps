// @flow
import * as React from 'react';
import { HStack, Input, View, Pressable, Box } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons/faBasketShopping';

import Colors from '../../themes/color';

const hstackProps = (): Object => ({
  space: 3,
  w: 'full',
  px: 6,
  bg: Colors.main,
  py: 4,
  alignItems: 'center',
  safeAreaTop: true
});

const searchInputProps = (): Object => ({
  placeholder: 'Kaos, Jaket, Celana ....',
  bg: Colors.white,
  w: '85%',
  h: 12,
  borderWidth: 0,
  variant: 'filled',
  type: 'search',
  _focus: {
    bg: Colors.white
  }
});

const HeaderSearch = (): React.Node => {
  return (
    <HStack {...hstackProps()}>
      <Input {...searchInputProps()} />
      <Pressable>
        <FontAwesomeIcon icon={faBasketShopping} color={Colors.white} size={24} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          bg={Colors.red}
          top={-13}
          left={2}
          _text={{
            color: Colors.white,
            fontSize: 11
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  )
}

export default HeaderSearch