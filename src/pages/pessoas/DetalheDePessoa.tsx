import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import LayoutBaseDePagina from "../../shared/layouts/LayoutBaseDePagina";
import FerramentasDeDetalhe from "../../shared/components/ferramentas-de-detalhe/FerramentasDeDetalhe";



const DetalheDePessoa: React.FC = () => {

    const { id = 'novo' } = useParams<'id'>();
    const navigate = useNavigate();

    const handleSave = () => {
        console.log('Save');
    }

    const handleDelete = () => {
        console.log('Save');
    }

    return (
        <LayoutBaseDePagina
            titulo="Detalhe de pessoa"
            barraDeFerramentas={<FerramentasDeDetalhe
                textoBotaoNovo="Adicionar"
                mostrarBotaoSalvarEFechar
                mostrarBotaoNovo={id !== 'novo'}
                mostrarBotaoApagar={id !== 'novo'}

                aoClicarEmSalvar={handleSave}
                aoClicarEmSalvarEVoltar={handleSave} //*será configurado */
                aoClicarEmApagar={handleDelete}
                aoClicarEmNovo={() => navigate('/pessoas/detalhe/novo')}
                aoClicarEmVoltar={() => navigate('/pessoas')}
            />}
        >
            <p>children</p>
        </LayoutBaseDePagina>
    )
}

export default DetalheDePessoa;
