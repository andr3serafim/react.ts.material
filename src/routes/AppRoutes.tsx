import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts/DrawerContext";

const AppRoutes = () => {

  const { toggleDrawerOpen } = useDrawerContext()

  return (
    <Routes>
      <Route path="/home" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Toggle Drawer</Button>} />
      <Route path="*" element={<Navigate to="/home" />} />  {/* O asterisco significa que se nenhuma rota for atendida, haverá um redirecionamento para a página 'Home'*/}
    </Routes>
  )

}

export default AppRoutes;
