import { createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            contrastText: '#fff',
        },
        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#fff',
        },
        background: {
            default: '#f7f6f3', 
            paper: '#fff'
        }
    }
});
