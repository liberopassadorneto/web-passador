import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heading } from '../Heading/Heading';
import { FeaturesItems } from './FeaturesItems';

export const MotionBox = motion<BoxProps>(Box);

export function FeaturesSection() {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [inView, animation]);

  return (
    <div id='features' ref={ref}>
      <MotionBox
        w='100%'
        maxW={1440}
        mx='auto'
        py={['20', '20', '20', '28']}
        initial={initial}
        animate={animation}
      >
        <Flex direction='column'>
          <Heading
            title={'Montagem Industrial'}
            subtitle={
              'Aplicação de novos métodos de trabalhos nos mais sectionersos segmentos de mercado, focando as atividades de Montagens Industriais, Calderaria e Manutenções.'
            }
          />
          <FeaturesItems />
        </Flex>
      </MotionBox>
    </div>
  );
}
