import { Box, Typography, Container } from "@mui/material";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <Box
      component="header"
      role="banner"
      sx={{
        backgroundColor: "#FFFFFF",
        py: 3,
        px: { xs: 2, sm: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          component="nav"
          role="navigation"
          aria-label="Navegação principal"
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
          }}
        >
          <Box 
            component="img" 
            src={logo} 
            alt="RD Station - Logo" 
            sx={{ height: 32 }}
            loading="eager"
          />
          <Typography
            component="p"
            variant="h6"
            sx={{
              fontWeight: 500,
              color: "#000000",
              display: { xs: "none", sm: "block" },
            }}
          >
            Gerador link do WhatsApp
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

