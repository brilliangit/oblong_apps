// @flow
import * as React from 'react';
import { Box, Image, ScrollView, Heading, Text } from 'native-base';
import _ from 'lodash';

import Colors from '../../themes/color';
import { formatIDRCurrency } from '../../utils/numberUtils';
import Rating from "../../components/Rating/Rating";
const product = {
  id: 8,
  name: 'Kaos Uniqlo XXL1',
  image: require('../../../assets/img/images4.png'),
  description: 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak. Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak. Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak. Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak. Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak. Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.',
  countInStok: 300,
  rating: 0,
  review: 2,
  price: 100000000
}

const SingleProduct = ({ route, navigation }: any): React.Node => {
  const { idProduct } = route.params;
  // const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    if (idProduct) {
      // const productSingle = _.find(product, { id: idProduct });
      // setProduct(productSingle);
    }
  }, [idProduct]);
  console.log(product, idProduct)
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={product.image}
          alt={product.name}
          w="full"
          resizeMode="contain"
        />
        <Box px={2} pt={5}>
          <Heading size="sm" bold>
            Rp {formatIDRCurrency(product.price)}
          </Heading>
          <Text fontSize={16} w="full" isTruncated mt={1}>
            {product.name}
          </Text>
        </Box>
        <Box px={2} pt={1}>
          <Rating key={product.id} rating={product.rating} />
        </Box>
        <Box px={2} pt={2}>
          <Heading size="xs" bold >
            Deskripsi
          </Heading>
          <Text fontSize={14} w="full" mt={1}>
            {product.description}
          </Text>
        </Box>
      </ScrollView>
    </Box>
  )
}

export default SingleProduct;
