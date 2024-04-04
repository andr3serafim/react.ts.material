import FerramentasDeDetalhe from "../../shared/components/ferramentas-de-detalhe/FerramentasDeDetalhe";
import LayoutBaseDePagina from "../../shared/layouts/LayoutBaseDePagina"


const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo="Dashboard"
      barraDeFerramentas={(
        <FerramentasDeDetalhe
          mostrarBotaoSalvarEFechar
        />
      )}
    >
      Testando
    </LayoutBaseDePagina>
  )
}

export default Dashboard;
