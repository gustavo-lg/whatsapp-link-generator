import { Box, Typography, Link } from "@mui/material";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        backgroundColor: "#F1F3F5",
        py: 3,
        mt: "auto",
      }}
    >
      <Box
        component="nav"
        role="navigation"
        aria-label="Links do rodapé"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="https://legal.rdstation.com/pt/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Política de Privacidade (abre em nova aba)"
          sx={{
            textDecoration: "underline",
            color: "#666666",
            fontSize: "0.875rem",
            "&:hover": {
              color: "#1976d2",
            },
            "&:focus-visible": {
              outline: "2px solid #1976d2",
              outlineOffset: "2px",
              borderRadius: "2px",
            },
          }}
        >
          Política de Privacidade
        </Link>
        <Typography
          component="p"
          variant="body2"
          sx={{
            color: "#666666",
            fontSize: "0.875rem",
          }}
        >
          © {currentYear} Resultados Digitais
        </Typography>
      </Box>
    </Box>
  );
}

