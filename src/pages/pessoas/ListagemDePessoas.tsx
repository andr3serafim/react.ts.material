import { useEffect, useMemo, useState } from 'react';

import { IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { IListagemPessoa, PessoasService } from '../../services/pessoas/PessoasService';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FerramentasDaListagem } from '../../shared/components/ferramentas-da-listagem/FerramentasDaListagem';
import { Environment } from '../../shared/environment/Environment';
import { useDebounce } from '../../shared/hooks/UseDebounce';
import { Delete, Edit } from '@mui/icons-material';

import LayoutBaseDePagina from '../../shared/layouts/LayoutBaseDePagina';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [rows, setRows] = useState<IListagemPessoa[] | null>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { debounce } = useDebounce(300);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const pagina = useMemo(() => {
    return Number(searchParams.get('pagina') || '1');
  }, [searchParams]);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await PessoasService.getAll(pagina, busca);
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          setTotalCount(result.totalCount);
          setRows(result.data);
          console.log(result.data);
        }
      } catch (error) {
        setIsLoading(false);
        alert('Ocorreu um erro ao buscar os dados.');
        console.error(error);
      }
    };

    debounce(fetchData);
  }, [busca, pagina]);

  // const handleDelete = (id: number) => {
  //   if (confirm('Confirma a exclusão?')) {
  //     PessoasService.deleteById(id)
  //       .then(result => {
  //         if (result instanceof Error) {
  //           alert(result.message)
  //         } else {
  //           setRows(oldRows => [
  //             ...oldRows.filter(oldRow => oldRow.id !== id),
  //           ]);
  //           alert('Registro apagado com sucesso!');
  //         }
  //       })
  //   }
  // }

  return (
    <LayoutBaseDePagina
      titulo='Listagem de pessoas'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoDaBusca={busca}
          textoBotaoNovo='Adicionar'
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/novo')}
          aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto, pagina: '1' }, { replace: true })}
        />
      }
    >

      <TableContainer component={Paper} variant='outlined' sx={{ m: 1, width: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome Completo</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows !== null &&
              rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.nomeCompleto}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <IconButton size='small' onClick={() => navigate(`/pessoas/detalhe/${row.id}`)}>
                      <Edit />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>


          {totalCount === 0 && !isLoading && (
            <caption>{Environment.LISTAGEM_VAZIA}</caption>
          )}

          <TableFooter>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={3}>
                  <LinearProgress variant='indeterminate' />
                </TableCell>
              </TableRow>
            )}

            {(totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS) && ( //os dados for maior que uma página
              <TableRow>
                <TableCell colSpan={3}> {/*determina quantas colunas vai ocupar (largura) */}
                  <Pagination
                    page={pagina}
                    onChange={(_, newPage) => setSearchParams({ busca, pagina: newPage.toString() }, { replace: true })}
                    count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)} />
                </TableCell>
              </TableRow>)}

          </TableFooter>

        </Table>
      </TableContainer>

    </LayoutBaseDePagina>
  );
};
