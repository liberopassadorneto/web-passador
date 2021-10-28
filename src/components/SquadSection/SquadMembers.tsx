import { Grid } from '@chakra-ui/react';
import React from 'react';
import { squadData } from './data';
import { SquadMember } from './SquadMember';

export function SquadMembers() {
  return (
    <Grid
      w='100%'
      mt={['8', '8', '8', '8', '20']}
      mx='auto'
      templateRows='repeat(1, 1fr)'
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ]}
      columnGap={['0', '0', '16', '0', '0']}
      rowGap={['14', '14', '14', '10', '20']}
      px={['4', '4', '4', '4']}
      pb='20'
      justifyItems='center'
      alignItems='center'
    >
      {squadData.map((item) => {
        return (
          <SquadMember
            key={item.id}
            name={item.name}
            jobTitle={item.jobTitle}
            bgGradient={item.bgGradient}
            hobbies={item.hobbies}
            avatarImg={item.avatarImg}
            borderColor={item.borderColor}
            btnColor={item.btnColor}
            btnLabel={item.btnLabel}
          />
        );
      })}
    </Grid>
  );
}
