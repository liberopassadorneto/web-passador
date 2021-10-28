import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function HeroSection() {
  function handleScrollTo(id: string) {
    const element = document.getElementById(id) as HTMLDivElement;

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      return false;
    }
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      id='hero'
      w='100%'
      maxW={1920}
      p={['0', '2']}
      px={['0', '0', '20', '8', '28']}
      bgGradient='linear(to-tr, shape, background)'
      borderBottomWidth={1}
      borderColor='borders'
    >
      <Flex
        mt={['16', '16', '16', '16', '28']}
        mb={['16', '16', '16', '10', '28']}
      >
        <SimpleGrid
          flex='1'
          px={['0', '0', '20', '10', '28']}
          gap='0'
          minChildWidth='320px'
          alignItems='center'
          justifyContent='center'
        >
          <Box textAlign={['center', 'left']}>
            <Text color='green' fontWeight='normal' fontSize={['sm', 'md']}>
              Montagem Industrial e Calderaria
            </Text>
            <Heading
              mt={8}
              color='gray'
              fontWeight='black'
              lineHeight='shorter'
              fontSize={['2xl', '2xl', '4xl', '4xl', '5xl']}
              w={['auto', '340px', '480px', '380px', '580px']}
              px={['8', '0']}
            >
              Manufatura, calderaria, manutenção e corte plasma CNC
            </Heading>
            <Text
              mt={6}
              color='gray'
              fontWeight='medium'
              w={['auto', '340px', '480px', '340px', '460px']}
              px={['6', '0']}
              fontSize={['sm', 'sm', 'md', 'md', 'md']}
            >
              A{' '}
              <Text as='span' color='primary' textTransform='uppercase'>
                Passador
              </Text>{' '}
              é capacitada pela norma N-134 para desenvolver aplicações nas
              atividades de Montagem Industrial, Calderaria e Manutenções.
            </Text>
            <ChakraLink style={{ textDecoration: 'none' }}>
              <Button
                as='a'
                fontSize={['sm', 'md']}
                fontWeight='bold'
                size='lg'
                bg='primary'
                color='white'
                mt={['10', '10', '10', '8']}
                px={['16', '16', '16', '14']}
                py={7}
                _hover={{ bg: 'primaryHover' }}
                onClick={() => handleScrollTo('features')}
              >
                SAIBA MAIS
              </Button>
            </ChakraLink>
          </Box>
          {isWideVersion && (
            <Box w={['340px', '340px', '240px', '440px', '540px']}>
              <Image src={'./assets/svg/to_the_stars.svg'} alt='rocket' />
            </Box>
          )}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
