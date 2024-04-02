import { createContext, useCallback, useContext, useState } from "react";

type DrawerContextPropsTypes = {
    isDrawerOpen: boolean,
    toggleDrawerOpen: () => void,
    drawerOptions: DrawerOptionsTypes[],
    setDrawerOptions: (newDrawerOptions: DrawerOptionsTypes[]) => void,
}

const DrawerContext = createContext({} as DrawerContextPropsTypes)

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

type DrawerProviderPropsType = {
    children: React.ReactNode
}

type DrawerOptionsTypes = {
    icon: string,
    path: string,
    label: string,
}

export const DrawerProvider: React.FC<DrawerProviderPropsType> = ({ children }) => {

    const [drawerOptions, setDrawerOptions] = useState<DrawerOptionsTypes[]>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: DrawerOptionsTypes[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
};
