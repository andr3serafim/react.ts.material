import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts/DrawerContext";
import { useEffect } from "react";

import Dashboard from "../pages/dashboard/Dashboard";
import ListagemDeCidades from "../pages/cidades/ListagemDeCidades";

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
        icon: "city",
        path: "/cidades",
        label: "Cidades"
      }
    ])
  }, [])

  return (
    <Routes>
      <Route path="/home" element={<Dashboard/>} />
      <Route path="/cidades" element={<ListagemDeCidades/>} />
      <Route path="*" element={<Navigate to="/home" />} />  {/* O asterisco significa que se nenhuma rota for atendida, haverá um redirecionamento para a página 'Home'*/}
    </Routes>
  )

}

export default AppRoutes;
