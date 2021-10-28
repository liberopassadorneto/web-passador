import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { NavMenu } from '../Header/NavMenu';

export function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <NavMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
