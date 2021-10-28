import { Grid } from '@chakra-ui/react';
import React from 'react';
import { featureData } from './data';
import { FeaturesItem } from './FeaturesItem';

export function FeaturesItems() {
  return (
    <Grid
      w='90%'
      mt={['8', '8', '8', '8', '20']}
      mx='auto'
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
      ]}
      columnGap={['0', '0', '16', '0', '0']}
      rowGap={['24', '24', '24', '28']}
      px={['4', '0', '4', '4']}
      pb='20'
      alignItems='center'
      justifyItems='center'
      textAlign={['center', 'inherit', 'inherit', 'inherit']}
    >
      {featureData.map((item) => {
        return (
          <FeaturesItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            icon={item.icon}
            isRight={item.isRight}
          />
        );
      })}
    </Grid>
  );
}
