import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Helmet } from "react-helmet-async";
import { SnackbarAlert } from "../components/SnackbarAlert";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppFixedResult } from "../components/WhatsAppFixedResult";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckIcon from "@mui/icons-material/Check";

export function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [link, setLink] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const stateLink = location.state?.link;
    if (stateLink) {
      setLink(stateLink);
    } else {
      // Se não houver link no state, redireciona para o formulário
      navigate("/");
    }
  }, [location, navigate]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setSnackbar({
        open: true,
        message: "Link copiado!",
        severity: "success",
      });
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Erro ao copiar link",
        severity: "error",
      });
    }
  };

  const handleNewLink = () => {
    navigate("/");
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Helmet>
        <title>Link Gerado com Sucesso - Gerador de Link para WhatsApp</title>
        <meta
          name="description"
          content="Seu link do WhatsApp foi gerado com sucesso! Copie e compartilhe em seus canais digitais."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://gerador-link-whatsapp.rdstation.com/resultado" />
      </Helmet>

      <Header />

      {/* Main Content Area with White Background */}
      <Box
        component="main"
        id="main-content"
        sx={{
          minHeight: "95vh",
          backgroundColor: "#fff",
          position: "relative",
          overflow: "hidden",
          mb: 3,
        }}
      >
        {/* Main Card with Radial Gradient */}
        <Box
          sx={{
            borderRadius: 4,
            background:
              "linear-gradient(90deg, #D1F7D8 0%, #f1f3f5 40%, #f1f3f5 60%, #6EF7FB 100%)",
            position: "relative",
            py: 12,
            px: 2,

            overflow: "hidden",
            mx: 3,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              paddingRight: {
                md: "10% !important",
                xs: "24px !important",
                sm: "24px !important",
                lg: "15% !important",
                xl: "24px  !important",
              },
            }}
          >
            {/* Navigation Link */}
            <Box sx={{ mb: 3 }}>
              <Link
                component="button"
                onClick={handleNewLink}
                sx={{
                  color: "#1976d2",
                  textDecoration: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "16px",
                    position: "relative",
                    top: "2px",
                    rotate: "180deg",
                  }}
                />{" "}
                Gerar outro link
              </Link>
            </Box>

            {/* Success Title */}
            <Typography
              variant="h3"
              component="h1"
              id="result-title"
              sx={{
                fontWeight: 700,
                mb: 4,
                color: "#000000",
              }}
            >
              Seu link de WhatsApp foi gerado com sucesso!
            </Typography>

            {/* Generated Link Field */}
            <Box 
              component="section"
              aria-labelledby="result-title"
              sx={{ mb: 4 }}
            >
              <TextField
                fullWidth
                value={link}
                label="Link gerado"
                InputProps={{
                  readOnly: true,
                  "aria-label": "Link do WhatsApp gerado",
                }}
                aria-describedby="link-description"
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "#E0E0E0",
                      borderRadius: "12px",
                      fontWeight: 400,
                      fontSize: "16px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#000000",
                    fontSize: "0.875rem",
                  },
                  "&:focus-within": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1976d2",
                      borderWidth: "2px",
                    },
                  },
                }}
              />
              <Typography
                id="link-description"
                variant="caption"
                sx={{ display: "none" }}
              >
                Link do WhatsApp gerado. Use o botão abaixo para copiar.
              </Typography>
            </Box>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                gap: 2,
                mb: 6,
                flexWrap: { xs: "wrap", md: "nowrap" },
                "@media screen and (max-width: 1150px)": {
                  flexWrap: "wrap",
                  justifyContent: "center",
                  flexDirection: "column",
                  mx: "auto",
                },
              }}
            >
              <Button
                variant="contained"
                onClick={handleCopyLink}
                startIcon={
                  copied ? (
                    <CheckIcon 
                      sx={{ color: "#00F2C9" }}
                      aria-hidden="true"
                    />
                  ) : (
                    <ContentCopyIcon aria-hidden="true" />
                  )
                }
                size="large"
                aria-label={copied ? "Link copiado com sucesso" : "Copiar link do WhatsApp"}
                aria-live="polite"
                aria-atomic="true"
                sx={{
                  backgroundColor: copied ? "#003D5C" : "#003D5C",
                  color: "#FFFFFF",
                  py: 1.5,
                  px: 3,
                  fontWeight: 700,
                  fontSize: "16px",
                  borderRadius: "12px",
                  textTransform: "none",
                  "&::first-letter": {
                    textTransform: "uppercase",
                  },
                  "&:hover": { backgroundColor: "#002D44" },
                  "&:focus-visible": {
                    outline: "3px solid #00F2C9",
                    outlineOffset: "2px",
                  },
                  "@media screen and (max-width: 1150px)": {
                    m: "auto",
                  },
                }}
              >
                {copied ? "Link copiado" : "Copie seu link"}
              </Button>

              {/* Right Aligned Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 2,
                  "@media screen and (max-width: 1150px)": {
                    flexWrap: "wrap",
                    justifyContent: "center",
                    flexDirection: "column",
                    mx: "auto",
                    mt: 2,
                  },
                }}
              >
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon aria-hidden="true" />}
                  size="large"
                  component="a"
                  href="https://ajuda.rdstation.com/s/rd-station-conversas?language=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Adicione um Botão de WhatsApp no site (abre em nova aba)"
                  sx={{
                    backgroundColor: "#FFFFFF",
                    color: "#000000",
                    borderColor: "#E0E0E0",
                    py: 1.5,
                    px: 3,
                    fontWeight: 700,
                    borderRadius: "12px",
                    textTransform: "none",
                    fontSize: "16px",
                    "&::first-letter": {
                      textTransform: "uppercase",
                    },
                    "&:hover": {
                      backgroundColor: "#F5F5F5",
                      borderColor: "#1976d2",
                    },
                    "&:focus-visible": {
                      outline: "3px solid #1976d2",
                      outlineOffset: "2px",
                    },
                  }}
                >
                  Adicione um Botão de WhatsApp no site
                </Button>

                {/* Promotional Text */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#002A3D",
                    fontSize: "16px",
                    fontWeight: 400,
                    textAlign: "right",
                  }}
                >
                  Faça isso com o teste grátis do <b>RD Station Marketing</b>
                </Typography>
              </Box>
            </Box>

            {/* Promotional Card - RD Station Conversas */}
            <Card
              elevation={0}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid #7BEFFF",
                mt: 4,
                position: "relative",
                zIndex: 2,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "#003D5C",
                    fontSize: "24px",
                  }}
                >
                  Quer aumentar em até 56% as suas vendas pelo WhatsApp?
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    color: "#000",
                    lineHeight: 1.6,
                    fontSize: "1rem",
                  }}
                >
                  Conheça o <b>RD Station Conversas</b>, uma solução oficial de
                  WhatsApp API que te garante um atendimento mais eficiente,
                  lucrativo e seguro. Com a nossa ferramenta você diminui os
                  riscos de ter seu número bloqueado e ainda melhorar suas taxas
                  de conversão. 
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    color: "#666666",
                    fontSize: "1rem",
                  }}
                >
                  Quer ficar por dentro sobre como nossa plataforma pode ajudar
                  a sua empresa?
                </Typography>

                <Link
                  href="https://ajuda.rdstation.com/s/rd-station-conversas?language=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#1976d2",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: 700,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Saiba mais{" "}
                  <ArrowForwardIosIcon
                    sx={{ fontSize: "16px", position: "relative", top: "2px" }}
                  />
                </Link>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Box>

      <Footer />

      <WhatsAppFixedResult />

      <SnackbarAlert
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  );
}
