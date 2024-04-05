import { Add, ArrowBack, Delete, Save } from '@mui/icons-material';
import { Box, Button, Divider, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

type FerramentasDeDetalhePropsTypes = {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEVoltar?: () => void;
}

const FerramentasDeDetalhe: React.FC<FerramentasDeDetalhePropsTypes> = ({
    textoBotaoNovo = "Novo",
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEVoltar,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,
}) => {

    const theme = useTheme();
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)} // altura do box
            component={Paper}>

            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && <Button
                onClick={aoClicarEmSalvar}
                color='primary'
                disableElevation
                variant='contained'  //contained marca como principal
                startIcon={<Save />}>

                <Typography
                    variant='button'
                    noWrap
                >Salvar</Typography>

            </Button>}

            {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60} />)}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && <Button
                onClick={aoClicarEmSalvarEVoltar}
                color='primary'
                disableElevation
                variant='outlined'
                startIcon={<Save />}
            ><Typography
                variant='button'
                noWrap
            >Salvar e fechar</Typography></Button>}

            {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Skeleton width={110} height={60} />)}


            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && <Button
                onClick={aoClicarEmApagar}
                color='primary'
                disableElevation
                variant='outlined'
                startIcon={<Delete />}
            ><Typography
                variant='button'
                noWrap
            >Apagar</Typography></Button>}

            {mostrarBotaoApagarCarregando && (<Skeleton width={110} height={60} />)}


            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && <Button
                onClick={aoClicarEmNovo}
                color='primary'
                disableElevation
                variant='outlined'
                startIcon={<Add />}
            ><Typography
                variant='button'
                noWrap
            >{textoBotaoNovo}</Typography></Button>}

            {(mostrarBotaoNovoCarregando && !smDown) && (<Skeleton width={110} height={60} />)}


            {(mostrarBotaoVoltar &&
                (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoVoltar || mostrarBotaoSalvarEFechar) &&
                < Divider variant='middle' orientation='vertical' />
            )}

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && <Button
                onClick={aoClicarEmVoltar}
                color='primary'
                disableElevation
                variant='outlined'
                startIcon={<ArrowBack />}
            ><Typography
                variant='button'
                noWrap
            >Voltar</Typography></Button>}

            {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={60} />)}

        </Box>
    )
}

export default FerramentasDeDetalhe;
