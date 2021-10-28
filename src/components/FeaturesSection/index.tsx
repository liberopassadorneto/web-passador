import { Box, Flex } from '@chakra-ui/react';
import { Heading } from '../Heading/Heading';
import { FeaturesItems } from './FeaturesItems';

export function FeaturesSection() {
  return (
    <div id='features'>
      <Box w='100%' maxW={1440} mx='auto' py={['20', '20', '20', '28']}>
        <Flex direction='column'>
          <Heading
            title={'Montagem Industrial'}
            subtitle={
              'Aplicação de novos métodos de trabalhos nos mais sectionersos segmentos de mercado, focando as atividades de Montagens Industriais, Calderaria e Manutenções.'
            }
          />
          <FeaturesItems />
        </Flex>
      </Box>
    </div>
  );
}
