import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { DrawerProvider } from "./shared/contexts/DrawerContext";

import AppRoutes from "./routes/AppRoutes";
import MenuLateral from "./shared/components/menu-lateral/MenuLateral";

const App = () => {

  return (
    <AppThemeProvider >
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  )
}

export default App;
