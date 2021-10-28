import { Heading as ChakraHeading, Stack, Text } from '@chakra-ui/react';

interface HeadingProps {
  title: string;
  subtitle: string;
  subtitleColor?: string;
}

export function Heading({
  title,
  subtitle,
  subtitleColor = 'text',
}: HeadingProps) {
  return (
    <Stack
      w='100%'
      mx='auto'
      mb='10'
      spacing={4}
      align='center'
      justify='center'
      textAlign='center'
    >
      <ChakraHeading
        maxW={['320px', '420px', '480px', '820px']}
        color='gray'
        fontSize={['3xl', '3xl', '4xl', '5xl']}
      >
        {title}
      </ChakraHeading>
      <Text
        maxW={['320px', '420px', '480px', '620px']}
        color={subtitleColor}
        fontSize={['sm', 'sm', 'sm', 'md']}
        px={['6', '6', '0', '0']}
      >
        {subtitle}
      </Text>
    </Stack>
  );
}
