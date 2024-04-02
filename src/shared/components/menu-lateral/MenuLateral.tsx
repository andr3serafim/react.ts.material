import { Home } from "@mui/icons-material";
import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { Box, useMediaQuery } from "@mui/system";
import { useDrawerContext } from "../../contexts/DrawerContext";

type MenuLateralPropsTypes = {
    children: React.ReactNode
}

const MenuLateral: React.FC<MenuLateralPropsTypes> = ({ children }) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { toggleDrawerOpen, isDrawerOpen } = useDrawerContext();

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
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
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
