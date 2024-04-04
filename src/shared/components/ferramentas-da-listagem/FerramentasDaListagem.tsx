import { Add } from "@mui/icons-material";
import { Box, Button, Paper, TextField, useTheme } from "@mui/material"

type FerramentasDaListagemPropsTypes = {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

const FerramentasDaListagem: React.FC<FerramentasDaListagemPropsTypes> = ({
  textoDaBusca = '',
  aoMudarTextoDeBusca,
  mostrarInputBusca = false,
  aoClicarEmNovo,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
}) => {

  const theme = useTheme();

  return (

    <Box
      height={theme.spacing(5)} // altura do box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      justifyContent="space-between"
      component={Paper}>

      {(mostrarInputBusca && // && significa 'se for true prossiga'
        <TextField
          size="small"
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)} //só vai executar a função se for diferente de undefined.
          placeholder="Pesquisar..."
        />
      )}

      <Box>
        {mostrarBotaoNovo && <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={aoClicarEmNovo}
          endIcon={<Add />}
        >
          {textoBotaoNovo}
        </Button>}
      </Box>

    </Box>
  )
}

export default FerramentasDaListagem
