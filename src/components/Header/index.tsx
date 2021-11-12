import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { CustomDrawer } from '../Drawer';
import { Logo } from '../Logo';
import { NavMenu } from './NavMenu';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as='header' p={2} borderBottomWidth={1} borderColor='borders'>
      <Flex
        w='100%'
        h='20'
        maxW={1920}
        mx='auto'
        px={['6', '12', '0']}
        align='center'
        justify={['space-between', 'space-between', 'space-around']}
      >
        <Logo />

        {isWideVersion ? <NavMenu /> : <CustomDrawer />}
      </Flex>
    </Flex>
  );
}
