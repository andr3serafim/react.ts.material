import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts/DrawerContext";
import { useEffect } from "react";

import { ListagemDePessoas } from "../pages/pessoas/ListagemDePessoas";
import { DetalheDePessoa } from "../pages/pessoas/DetalheDePessoa";
import { ListagemDeCidades } from "../pages/cidades/ListagemDeCidades";
import { DetalheDeCidades } from "../pages/cidades/DetalheDeCidade";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        path: "/home",
        label: "Home"
      },
      {
        icon: "people",
        path: "/pessoas",
        label: "Pessoas"
      },
      {
        icon: "city",
        path: "/cidades",
        label: "Cidades"
      }
    ])
  }, [])

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListagemDePessoas />} />
      <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoa />} />
      <Route path="/cidades" element={<ListagemDeCidades />} />
      <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />
      <Route path="*" element={<Navigate to="/home" />} />  {/* O asterisco significa que se nenhuma rota for atendida, haverá um redirecionamento para a página 'Home'*/}
    </Routes>
  )

}

export default AppRoutes;
