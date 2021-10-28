import { Box, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { ScrollToTop } from '../ScrollToTop';

export function Footer() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box bg='black'>
      <Box
        as='footer'
        role='contentinfo'
        mx='auto'
        maxW='7xl'
        py='12'
        px={['8', '8', '16', '12', '0']}
      >
        <Stack>
          <Stack
            direction='row'
            spacing='4'
            align='center'
            justify='space-between'
          >
            <Logo />
            <ScrollToTop />
          </Stack>
          <Text
            fontSize={['xs', 'sm']}
            alignSelf={{ base: 'center', sm: 'start', xs: 'start' }}
          >
            &copy; {new Date().getFullYear()} Passador, Ltda.{' '}
            {!isWideVersion && <br />}
            Direitos Reservados.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
