import { HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const svgVariants = {
  hidden: { rotate: 0 },
  visible: { rotate: 0, transition: { duration: 1 } },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

export function Logo() {
  return (
    <HStack>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        width='24'
        height='24'
        stroke='#8257e5'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-triangle'
        variants={svgVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.path
          d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'
          variants={pathVariants}
        ></motion.path>
      </motion.svg>
      <Text color='gray' fontSize='xl' fontWeight='bold' letterSpacing='tight'>
        Passador
      </Text>
    </HStack>
  );
}
