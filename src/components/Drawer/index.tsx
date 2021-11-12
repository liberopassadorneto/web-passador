import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link as ChakraLink,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { ButtonCTA } from '../Button/ButtonCTA';
import { navData } from '../Header/data';

export function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  function handleDrawerOnClose(id: string) {
    handleScrollTo(id);
    onClose();
  }

  return (
    <>
      <IconButton
        aria-label='Open Menu'
        size='lg'
        mr={2}
        icon={<HamburgerIcon color='primary' />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent bg='shape' p='4'>
          <DrawerCloseButton color='primary' />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Stack
              spacing={12}
              direction={['column', 'column', 'column', 'row']}
            >
              {navData.map((item) => {
                return (
                  <ChakraLink
                    key={item.id}
                    color='gray'
                    _hover={{ color: 'white' }}
                    style={{ textDecoration: 'none' }}
                    onClick={() => handleDrawerOnClose(item.id)}
                  >
                    {item.title}
                  </ChakraLink>
                );
              })}
              <ButtonCTA
                label='Entrar em contato'
                href='https://wa.me/message/HMRTNVF66NLRO1'
                onClick={onClose}
              />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
