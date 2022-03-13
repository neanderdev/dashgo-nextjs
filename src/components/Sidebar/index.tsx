import { Box, Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} titleNavLink="Dashboard" />
          <NavLink icon={RiContactsLine} titleNavLink="Usuário" />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} titleNavLink="Formulários" />
          <NavLink icon={RiGitMergeLine} titleNavLink="Automação" />
        </NavSection>
      </Stack>
    </Box>
  );
}
