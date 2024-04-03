import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { Box, useMediaQuery } from "@mui/system";
import { useDrawerContext } from "../../contexts/DrawerContext";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

type MenuLateralPropsTypes = {
    children: React.ReactNode
}

type ListItemLinkPropsTypes = {
    label: string,
    icon: string,
    to: string,
    onClick: (() => void) | undefined
}

export const SidebarListItemLink: React.FC<ListItemLinkPropsTypes> = ({ label, to, icon, onClick }) => {

    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};

const MenuLateral: React.FC<MenuLateralPropsTypes> = ({ children }) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { toggleDrawerOpen, isDrawerOpen, drawerOptions } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            alt="Teste"
                            src="https://yt3.ggpht.com/yti/ANjgQV_OI-TlI3bJxzsPMiqHRoNLQEtCLm_fKtqi0beNpw=s88-c-k-c0x00ffffff-no-rj" />
                    </Box>
                    <Divider />
                    <Box flex={1}> {/*Ocupa todo o resto do espaço disponível*/}
                        <List component="nav">
                            {drawerOptions.map(drawerOptions => (<SidebarListItemLink
                                to={drawerOptions.path}
                                key={drawerOptions.path}
                                icon={drawerOptions.icon}
                                label={drawerOptions.label}
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />))}
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
};

export default MenuLateral;
