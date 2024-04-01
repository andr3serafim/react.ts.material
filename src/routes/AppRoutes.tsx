import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {

  return (
    <Routes>
        <Route path="/home" element={<p>Página Inicial</p>}/>

        <Route path="*" element={<Navigate to="/home"/>} />  {/* O asterisco significa que se nenhuma rota for atendida, haverá um redirecionamento para a página inicial*/}
    </Routes>
  )


}

export default AppRoutes;