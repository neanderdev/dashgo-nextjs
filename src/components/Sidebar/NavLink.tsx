import { ElementType } from 'react';
import Link from 'next/link';
import {
  Icon,
  Text,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  titleNavLink: string;
  href: string;
}

export function NavLink({ icon, titleNavLink, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {titleNavLink}
        </Text>
      </ChakraLink>
    </Link>
  );
}
