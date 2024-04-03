import { Menu } from "@mui/icons-material"
import { Box } from "@mui/system"
import { IconButton, Theme, Typography, useTheme, useMediaQuery } from "@mui/material"
import { useDrawerContext } from "../contexts/DrawerContext"

type LayoutBaseDePaginaPropsTypes = {
    titulo: string,
    barraDeFerramentas: React.ReactNode | undefined,
    children: React.ReactNode,
}

const LayoutBaseDePagina: React.FC<LayoutBaseDePaginaPropsTypes> = ({ titulo, children, barraDeFerramentas }) => {

    const theme = useTheme()
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} gap={1}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Menu />
                    </IconButton>)}
                <Typography
                    variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis" // insere reticencias ao final da frase
                >
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramentas && (<Box>
                {barraDeFerramentas}
            </Box>)}

            <Box flex={1} overflow="auto"
            // flex 1 é para ocupar todo o espaço disponível na caixa e o overflow é para criar o scroll dentro da caixa do contexto
            >
                {children}
            </Box>
        </Box>
    )
}

export default LayoutBaseDePagina;