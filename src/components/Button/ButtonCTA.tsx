import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface ButtonCTAProps extends ChakraButtonProps {
  label: string;
  icon?: ReactElement;
  href: string;
}

export function ButtonCTA({ label, icon, href, ...rest }: ButtonCTAProps) {
  return (
    <ChakraLink href={href} style={{ textDecoration: 'none' }} isExternal>
      <ChakraButton
        rightIcon={icon}
        as='a'
        fontSize='sm'
        bg='primary'
        color='white'
        _hover={{ bg: 'primaryHover' }}
        px='6'
        py='4'
        mt={['10', '10', '10', '0']}
      >
        {label}
      </ChakraButton>
    </ChakraLink>
  );
}
