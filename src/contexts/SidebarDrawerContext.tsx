/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface SiderbarDrawerProviderProps {
    children: ReactNode;
}

type SiderbarDrawerContextData = UseDisclosureReturn;

const SiderbarDrawerContext = createContext({} as SiderbarDrawerContextData);

export function SiderbarDrawerProvider({ children }: SiderbarDrawerProviderProps) {
    const disclojure = useDisclosure();

    const router = useRouter();

    useEffect(() => {
        disclojure.onClose();
    }, [router.asPath]);

    return (
        <SiderbarDrawerContext.Provider value={disclojure}>
            {children}
        </SiderbarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SiderbarDrawerContext);