import { Stack } from '@chakra-ui/react';
import {
    RiContactsLine,
    RiDashboardLine,
    RiGitMergeLine,
    RiInputMethodLine,
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} titleNavLink="Dashboard" href='/dashboard' />
                <NavLink icon={RiContactsLine} titleNavLink="Usuário" href='/users' />
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine} titleNavLink="Formulários" href='/forms' />
                <NavLink icon={RiGitMergeLine} titleNavLink="Automação" href='/automation' />
            </NavSection>
        </Stack>
    );
}