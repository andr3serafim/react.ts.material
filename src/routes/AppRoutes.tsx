import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {

  return (
    <Routes>
        <Route path="/home" element={<Button variant="contained" color="primary">Teste</Button>}/>
        <Route path="*" element={<Navigate to="/home"/>} />  {/* O asterisco significa que se nenhuma rota for atendida, haverá um redirecionamento para a página 'Home'*/}
    </Routes>
  )

}

export default AppRoutes;