import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

const AppRoutes = () => {

  const { toggleTheme } = useAppThemeContext()

  return (
    <Routes>
      <Route path="/home" element={<Button variant="contained" color="primary" onClick={toggleTheme}>ToggleTheme</Button>} />
      <Route path="*" element={<Navigate to="/home" />} />  {/* O asterisco significa que se nenhuma rota for atendida, haverá um redirecionamento para a página 'Home'*/}
    </Routes>
  )

}

export default AppRoutes;
