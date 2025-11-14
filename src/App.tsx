import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { AppRoutes } from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#25D366", // Cor do WhatsApp
    },
  },
  typography: {
    fontFamily: '"Red Hat Display", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
