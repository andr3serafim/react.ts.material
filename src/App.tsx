import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { LighTheme } from "./shared/themes/Light";

import AppRoutes from "./routes/AppRoutes";

const App = () => {

  return (
    <ThemeProvider theme={LighTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App;