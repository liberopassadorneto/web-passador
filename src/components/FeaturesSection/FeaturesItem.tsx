import {
  Box,
  Heading as ChakraHeading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

type FeatureItemProps = {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  isRight?: boolean;
};

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
        <Box w={['220px', '400px', '300px', '440px']}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/svg/${icon}.svg`}
            alt={icon}
          />
        </Box>
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
        <Box w={['220px', '400px', '300px', '440px']}>
          <img src={`../assets/svg/${icon}.svg`} alt={icon}></img>
        </Box>
      )}
    </>
  );
}
