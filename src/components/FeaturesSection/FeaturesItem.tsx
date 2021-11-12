import {
  Box,
  BoxProps,
  Heading as ChakraHeading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

type FeatureItemProps = {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  isRight?: boolean;
};

export const MotionBox = motion<BoxProps>(Box);

export function FeaturesItem({
  title,
  subtitle,
  description,
  icon,
  isRight = true,
}: FeatureItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {!isRight && isWideVersion && (
        <MotionBox
          w={['220px', '400px', '300px', '440px']}
          drag='x'
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/svg/${icon}.svg`}
            alt={icon}
          />
        </MotionBox>
      )}
      <Box px={['4', '0', '0', '0', '0']} mx='auto'>
        <Text
          fontSize={['xs', 'sm', 'sm', 'md']}
          color='primary'
          mb='2'
          textTransform='uppercase'
        >
          {subtitle}
        </Text>
        <ChakraHeading
          maxW='390px'
          fontSize={['2xl', '3xl', '3xl', '4xl']}
          color='gray'
          mb='2'
        >
          {title}
        </ChakraHeading>
        <Text
          maxW='325px'
          fontSize={['sm', 'sm', 'sm', 'md']}
          color='text'
          px={['2', '0', '0', '0']}
        >
          {description}
        </Text>
      </Box>
      {isRight && isWideVersion && (
        <MotionBox
          w={['220px', '400px', '300px', '440px']}
          drag='x'
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={`../assets/svg/${icon}.svg`} alt={icon}></img>
        </MotionBox>
      )}
    </>
  );
}
