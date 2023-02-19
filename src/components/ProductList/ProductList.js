// @flow
import * as React from 'react';
import { Flex, Pressable, ScrollView, Image, Text, Box, Heading } from 'native-base';

import Colors from '../../themes/color';
import products from '../../mock/Product';
import Rating from "../Rating/Rating";
import { formatIDRCurrency } from '../../utils/numberUtils';

const ProductList = ({ navigation }: any): React.Node => {
  const showSingleProduct = (id: number) => () => {
    navigation.navigate('SingleProduct', {
      idProduct: id
    });
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
        bg={Colors.white}
      >
        {
          products.map((product) => (
            <Pressable
              key={product.id}
              w="47%"
              bg={Colors.white}
              shadow={2}
              rounded="md"
              pt={0.3}
              pb={2}
              my={3}
              onPress={showSingleProduct(product.id)}
            >
              <Image
                source={product.image}
                alt={product.name}
                w="full"
                h={24}
                resizeMode="contain"
              />
              <Box px={4} pt={2}>
                <Heading size="xs" bold>
                  Rp {formatIDRCurrency(product.price)}
                </Heading>
                <Text fontSize={12} w="full" isTruncated mt={1}>
                  {product.name}
                </Text>
              </Box>
              <Box px={4} pt={1}>
                <Rating key={product.id} rating={product.rating} />
              </Box>
            </Pressable>
          ))
        }
      </Flex>
    </ScrollView>
  );
};

export default ProductList;
