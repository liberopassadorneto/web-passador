import { Link as ChakraLink, Stack } from '@chakra-ui/react';
import { ButtonCTA } from '../Button/ButtonCTA';
import { navData } from './data';

export function NavMenu() {
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

  return (
    <>
      <Stack spacing={12} direction={['column', 'column', 'column', 'row']}>
        {navData.map((item) => {
          return (
            <ChakraLink
              key={item.id}
              color='gray'
              _hover={{ color: 'white' }}
              style={{ textDecoration: 'none' }}
              onClick={() => handleScrollTo(item.id)}
            >
              {item.title}
            </ChakraLink>
          );
        })}
      </Stack>

      <ButtonCTA
        label='Entrar em contato'
        href='https://wa.me/message/HMRTNVF66NLRO1'
      />
    </>
  );
}
