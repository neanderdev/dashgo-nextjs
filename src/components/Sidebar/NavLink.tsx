import { ElementType } from 'react';
import {
  Icon,
  Text,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  titleNavLink: string;
  href: string;
}

export function NavLink({ icon, titleNavLink, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {titleNavLink}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
