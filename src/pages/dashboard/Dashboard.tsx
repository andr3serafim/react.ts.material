import FerramentasDeDetalhe from "../../shared/components/ferramentas-de-detalhe/FerramentasDeDetalhe";
import LayoutBaseDePagina from "../../shared/layouts/LayoutBaseDePagina"


const Dashboard = () => {

  return (
    <div>
      <LayoutBaseDePagina
        titulo="Dashboard"
        barraDeFerramentas={(
          <FerramentasDeDetalhe
          mostrarBotaoNovo
          mostrarBotaoVoltar={false}
          mostrarBotaoSalvarEFechar
          mostrarBotaoSalvarEFecharCarregando

          />
        )}
      >
        Testando
      </LayoutBaseDePagina>
    </div>
  );
};

export default Dashboard;
