import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '../Heading/Heading';
import { SquadMembers } from './SquadMembers';

export function SquadSection() {
  return (
    <Box
      as='div'
      id='squad'
      borderTopWidth={1}
      borderBottomWidth={1}
      borderColor='borders'
    >
      <Box maxW={1440} mt='28' mx='auto'>
        <Flex direction='column'>
          <Heading
            title={'Uma equipe capacitada focada em qualidade e produtividade'}
            subtitle={
              'A equipe da Passador conta com mais de 10 profissionais com foco na montagem industrial, corte de plasma CNC e calderaria.'
            }
          />
          <SquadMembers />
        </Flex>
      </Box>
    </Box>
  );
}
