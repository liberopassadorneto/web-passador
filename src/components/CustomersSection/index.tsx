import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Heading } from '../Heading/Heading';
import { CustomerItems } from './CustomerItems';

export function CustomersSection() {
  return (
    <div id='customers'>
      <Box
        w='100%'
        maxW={1920}
        bg='black'
        borderTopWidth={1}
        borderColor='borders'
        py={['20', '20', '20', '28']}
      >
        <Box w='100%' maxW={1480} mx='auto'>
          <Flex direction='column'>
            <Box w={['75%', '75%', '50%', '75%', '100%']} mx='auto'>
              <Heading
                title={'Empresas parceiras da Passador'}
                subtitle={'Nós trabalhamos com as melhores empresas'}
                subtitleColor={'green'}
              />
            </Box>
            <CustomerItems />
          </Flex>
        </Box>
      </Box>
    </div>
  );
}
