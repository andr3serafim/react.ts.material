import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

const App = () => {

  return (
    <AppThemeProvider >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>


  )
}

export default App;