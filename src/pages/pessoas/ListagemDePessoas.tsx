import { useEffect, useMemo, useState } from 'react';

import { IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material';
import { IListagemPessoa, PessoasService } from '../../services/pessoas/PessoasService';
import { FerramentasDaListagem } from '../../shared/components/ferramentas-da-listagem/FerramentasDaListagem';
import { useSearchParams } from 'react-router-dom';
import { Environment } from '../../shared/environment/Environment';
import { useDebounce } from '../../shared/hooks/UseDebounce';

import LayoutBaseDePagina from '../../shared/layouts/LayoutBaseDePagina';
import { Delete, Edit } from '@mui/icons-material';

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [rows, setRows] = useState<IListagemPessoa[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { debounce } = useDebounce(300);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const pagina = useMemo(() => {
    return Number(searchParams.get('pagina') || '1');
  }, [searchParams]);


  useEffect(() => {

    setIsLoading(true);

    debounce(() => {
      PessoasService.getAll(pagina, busca)
        .then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
          } else {
            console.log(result);

            setTotalCount(result.totalCount);
            setRows(result.data);
          }
        });
    });
  }, [busca, pagina]);


  return (
    <LayoutBaseDePagina
      titulo='Listagem de pessoas'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoDaBusca={busca}
          textoBotaoNovo='Nova'
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
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.nomeCompleto}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <IconButton>
                    <Delete fontSize='small'/>
                  </IconButton>
                  <IconButton>
                    <Edit fontSize='small'/>
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
