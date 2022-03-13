import { ElementType } from 'react';
import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  titleNavLink: string;
}

export function NavLink({ icon, titleNavLink, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {titleNavLink}
      </Text>
    </Link>
  );
}
