// @flow
import * as React from 'react';
import { HStack } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons/faStarHalfAlt';
import { faStar as faStarReguler } from '@fortawesome/free-regular-svg-icons/faStar';

import type { PropsRating } from './Rating.types';
import { size } from 'lodash';
import Colors from '../../themes/color';

const star = [1, 2, 3, 4, 5];

const getIconProps = (value: number, rating: number) => ({
  icon: rating >= value ? faStar : (rating >= (value - 0.5) ? faStarHalfAlt: faStarReguler),
  size: 12,
  color: Colors.orange
})

const Rating = (props: PropsRating): React.Node => {
  return (
    <HStack space={0.4} mt={1} alignItems="center">
      {
        star.map(value => (
          <FontAwesomeIcon {...getIconProps(value, props.rating)} />
        ))
      }
    </HStack>
  )
}

export default Rating;
