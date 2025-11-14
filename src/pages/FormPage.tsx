import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Link,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MessageIcon from "@mui/icons-material/Message";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Title, Meta, Link as HeadLink } from "react-head";
import { useFormLink } from "../hooks/useFormLink";
import { FormField } from "../components/FormField";
import { SelectCargo } from "../components/SelectCargo";
import { SnackbarAlert } from "../components/SnackbarAlert";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppFixed } from "../components/WhatsAppFixed";
import { formatPhone } from "../utils/formatPhone";
import type { FormData } from "../types/form";
import womanPhone from "../assets/woman-phone.webp";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function FormPage() {
  const navigate = useNavigate();
  const { form, submitForm, loading, error } = useFormLink();
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((prev) => {
        const newSet = new Set(prev);
        if (isExpanded) {
          newSet.add(panel);
        } else {
          newSet.delete(panel);
        }
        return newSet;
      });
    };

  const handleCloseAll = () => {
    setExpanded(new Set());
  };

  // Resetar formulário quando a página for montada
  useEffect(() => {
    form.reset({
      telefone: "",
      email: "",
      cargo: "" as FormData["cargo"],
      mensagem: "",
      aceitaPolitica: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhone(value);
    form.setValue("telefone", formatted, { shouldValidate: true });
  };

  const onSubmit = async (data: any) => {
    const link = await submitForm(data);
    if (link) {
      navigate("/resultado", { state: { link } });
    } else {
      setSnackbar({
        open: true,
        message: error || "Erro ao gerar link. Tente novamente.",
        severity: "error",
      });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Title>Gerador de Link para WhatsApp - RD Station</Title>
      <Meta
        name="description"
        content="Gerador de Link para WhatsApp gratuito da RD Station. Crie seu link personalizado e inicie conversas com um clique nos seus canais digitais!"
      />
      <Meta
        name="keywords"
        content="gerador link whatsapp, link whatsapp, whatsapp business, rd station, criar link whatsapp"
      />
      <Meta property="og:title" content="Gerador de Link para WhatsApp - RD Station" />
      <Meta
        property="og:description"
        content="Crie seu link de WhatsApp e inicie conversas com um clique nos seus canais digitais!"
      />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Gerador de Link para WhatsApp - RD Station" />
      <Meta
        name="twitter:description"
        content="Crie seu link de WhatsApp e inicie conversas com um clique nos seus canais digitais!"
      />
      <HeadLink rel="canonical" href="https://gerador-link-whatsapp.rdstation.com/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Gerador de Link para WhatsApp",
            description: "Ferramenta gratuita para criar links personalizados do WhatsApp",
            url: "https://gerador-link-whatsapp.rdstation.com/",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
            },
            provider: {
              "@type": "Organization",
              name: "RD Station",
              url: "https://www.rdstation.com",
            },
          }),
        }}
      />

      <Header />

      <Box
        component="main"
        id="main-content"
        sx={{
          minHeight: "100vh",
          backgroundColor: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Main Card with Radial Gradient */}
        <Box
          sx={{
            borderRadius: 4,
            background:
              "linear-gradient(90deg, #C6F1FF 0%, #f1f3f5 40%, #f1f3f5 60%, #F0FCD2 100%)",
            position: "relative",
            py: 4,
            px: 2,

            overflow: "hidden",
            mx: 3,
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative" }}>
            {/* Title and Subtitle */}
            <Box 
              component="section"
              aria-labelledby="main-title"
              sx={{ textAlign: "center", mb: 4 }}
            >
              <Typography
                variant="h3"
                component="h1"
                id="main-title"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  mt: 4,
                  color: "#000000",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Gerador de Link para WhatsApp
              </Typography>

              <Typography
                component="p"
                variant="body1"
                sx={{
                  color: "#706b6b",
                  fontSize: {
                    xs: "1rem",
                    sm: "20px",
                    md: "1.3rem",
                  },
                }}
              >
                Crie seu link de WhatsApp e inicie conversas com um clique nos
                seus canais digitais!
              </Typography>
            </Box>

            {/* Form Section */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", md: "86.666667%", lg: "78.333333%" },
                }}
              >
                {/* White Form Panel */}
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 1,
                    backgroundColor: "transparent",
                  }}
                >
                  <Box
                    component="form"
                    onSubmit={form.handleSubmit(onSubmit)}
                    sx={{
                      "& .MuiInputBase-input": {
                        color: "#000000",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#666666",
                        mt: 0.5,
                      },
                    }}
                  >
                    {/* Primeira linha: WhatsApp e Email */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: 3,
                        mb: 3,
                      }}
                    >
                      <FormField
                        name="telefone"
                        control={form.control}
                        label="Número do WhatsApp*"
                        placeholder="(00) 0 0000-0000"
                        inputProps={{ maxLength: 15 }}
                        onChange={handlePhoneChange}
                        size="small"
                      />
                      <FormField
                        name="email"
                        control={form.control}
                        label="Email*"
                        type="email"
                        placeholder="nome@email.com"
                        size="small"
                      />
                    </Box>

                    {/* Segunda linha: Cargo */}
                    <Box sx={{ mb: 3 }}>
                      <SelectCargo
                        name="cargo"
                        control={form.control}
                        label="Cargo*"
                      />
                    </Box>

                    {/* Terceira linha: Mensagem */}
                    <Box sx={{ mb: 3 }}>
                      <FormField
                        name="mensagem"
                        control={form.control}
                        label="Mensagem (Opcional)"
                        multiline
                        rows={3}
                        placeholder="Crie uma mensagem que facilite a interação com os contatos."
                        size="small"
                      />
                    </Box>

                    {/* Privacy Policy Text */}
                    <Box sx={{ my: 4 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.875rem",
                          color: "#000000",
                          mb: 1,
                          textAlign: "center",
                        }}
                      >
                        Ao preencher o formulário, concordo * em receber
                        comunicações de acordo com meus interesses.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.875rem",
                          color: "#000000",
                          mb: 1,
                          textAlign: "center",
                        }}
                      >
                        Ao informar meus dados, eu concordo com a{" "}
                        <Link
                          href="https://legal.rdstation.com/pt/privacy-policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ textDecoration: "underline", color: "#000" }}
                        >
                          Política de privacidade
                        </Link>
                        .
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.875rem",
                          color: "#000000",
                          textAlign: "center",
                        }}
                      >
                        *Você pode alterar suas permissões de comunicação a
                        qualquer tempo.
                      </Typography>
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      aria-label={loading ? "Gerando link do WhatsApp" : "Gerar link grátis do WhatsApp"}
                      sx={{
                        fontSize: "16px",
                        display: "block",
                        margin: "0 auto",
                        fontWeight: 600,
                        py: "12px",
                        px: "24px",
                        backgroundColor: "#003D5C",
                        color: "#FFFFFF",
                        borderRadius: "12px",
                        textTransform: "none",
                        "&::first-letter": {
                          textTransform: "uppercase",
                        },
                        "&:hover": { backgroundColor: "#002D44" },
                        mt: 2,
                      }}
                    >
                      {loading ? "Gerando..." : (
                        <>
                          Gerar link grátis <ArrowForwardIcon sx={{ marginLeft: 1, verticalAlign: "middle",fontSize: "16px" }} />
                        </>
                      )}
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* MediaTopics Section - Below the form */}
        <Box
          sx={{
            maxWidth: "100%",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mx: "auto",
            px: 2,
            gap: 3,
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "flex-start",
              my: 10,
            }}
          >
            {/* Card 1 - Atalho rumo às vendas */}
            <Card
              elevation={0}
              sx={{
                borderRadius: 1,
                border: "1px solid #005A87",
                height: "auto",
             
                maxWidth: "329px",
                minHeight: "210px",
                maxHeight: "230px",
                "@media screen and (max-width: 1400px)": {
                  minHeight: "240px",
                  maxWidth: "290px",
                },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <TrendingUpIcon sx={{ fontSize: 40, color: "#005A87" }} />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                  Atalho rumo às vendas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  O Gerador de link do WhatsApp faz com que usuários se
                  transformem em contatos (Leads) e iniciem conversas certeiras
                  com sua marca.
                </Typography>
              </CardContent>
            </Card>

            {/* Card 2 - Mensagem automática */}
            <Card
              elevation={0}
              sx={{
                borderRadius: 1,
                border: "1px solid #005A87",
                height: "auto",
             
                maxWidth: "329px",
                minHeight: "210px",
                maxHeight: "230px",
                "@media screen and (max-width: 1400px)": {
                  minHeight: "240px",
                  maxWidth: "290px",
                },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <MessageIcon sx={{ fontSize: 40, color: "#005A87" }} />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                  Mensagem automática
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Você automatiza mensagens estimulando o início da conversa, o
                  que facilita a vida dos usuários e clientes.
                </Typography>
              </CardContent>
            </Card>

            {/* Card 3 - Rápido e 100% gratuito */}
            <Card
              elevation={0}
              sx={{
                borderRadius: 1,
                border: "1px solid #005A87",
                height: "auto",
      
                maxWidth: "329px",
                minHeight: "210px",
                maxHeight: "230px",
                "@media screen and (max-width: 1400px)": {
                  minHeight: "240px",
                  maxWidth: "290px",
                },
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <BoltIcon sx={{ fontSize: 40, color: "#005A87" }} />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                  Rápido e 100% gratuito
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Não sabe como fazer link de WhatsApp? O Gerador da RD Station
                  é fácil de usar e permite gerar links em segundos!
                </Typography>
              </CardContent>
            </Card>
            {/* Card 4 - Imagem da mulher */}
            <Card
              elevation={0}
              sx={{
                borderRadius: 1,
                overflow: "hidden",
             
                maxWidth: "340px",
                minHeight: "210px",
                maxHeight: "230px",
                flexShrink: 0,
                "@media screen and (max-width: 1400px)": {
                  minHeight: "280px",
                },
                order: `@media  screen and (min-width: 768px) and (max-width: 1024px) {
                order: -1;
              }
              @media screen and (max-width: 1025px) {
                order: -1;
              }`,
              "@media screen and (min-width: 768px) and (max-width: 1024px)": {
                  width: "100%",
                  maxWidth: "93%",
                  maxHeight: "400px",
                  height: "400px",
                },
              }}
            >
              <CardMedia
                component="img"
                image={womanPhone}
                alt="Mulher usando smartphone"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Card>
          </Box>
        </Box>

        {/* Benefits Section */}
        <Box
          component="section"
          aria-labelledby="benefits-title"
          sx={{
            backgroundColor: "#FFFFFF",
            py: 8,
            px: 2,
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                  "@media (max-width: 1105px)": {
                    gridTemplateColumns: "1fr", // escondido somente até 625px
                  },
                },
                gap: 6,
                alignItems: "center",
              }}
            >
              {/* Left Side - Headline */}
              <Box>
                <Typography
                  variant="h2"
                  component="h2"
                  id="benefits-title"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem" },
                    lineHeight: 1.05,
                    mb: 2,
                    // garante que os spans se alinhem bem
                    "& .hl-line": {
                      display: "inline-block",
                      position: "relative",
                      zIndex: 1,
                      padding: "6px 10px", // padding interno do texto (ajusta conforme quiser)
                      borderRadius: "8px",
                      // remove background do próprio span - só usamos ::before
                      background: "transparent",
                      width: "auto",
                    },
                    // espaçamento entre as linhas
                    "& .hl-wrap": {
                      display: "block",
                      marginBottom: { xs: "6px", md: "10px" },
                    },
                  }}
                >
                  Acelere suas
                  <Box
                    component="br"
                    sx={{
                      display: "block", // comportamento padrão
                      "@media (max-width: 1105px)": {
                        display: "none", // escondido somente até 625px
                      },
                    }}
                  />
                  conversas com o
                  <Box
                    component="br"
                    sx={{
                      display: "block", // comportamento padrão
                      "@media (max-width: 1105px)": {
                        display: "none", // escondido somente até 625px
                      },
                    }}
                  />
                  {/* Linha azul: usando ::before para a faixa maior que o texto */}
                  <Box
                    component="span"
                    className="hl-wrap"
                    sx={{
                      // container inline para controlar a faixa via ::before
                      display: "inline-block",
                    }}
                  >
                    <Box
                      component="span"
                      className="hl-line"
                      sx={{
                        color: "#000",
                        fontWeight: 800,
                        // pseudo-elemento que desenha a faixa por trás, mais larga
                        "&::before": {
                          content: "''",
                          position: "absolute",
                          left: "-2%", // estende para a esquerda
                          // estende para a direita
                          top: "70%",
                          transform: "translateY(-50%)",
                          height: "0.5em", // controla "altura" da faixa
                          background: "#7BEFFF",
                          width: "100%",
                          borderRadius: "8px",
                          m: "0 2%",
                          zIndex: -1,
                          boxShadow: "0 6px 18px rgba(34,100,120,0.06)", // leve sombra opcional
                        },
                      }}
                    >
                      Gerador de link de
                    </Box>
                  </Box>
                  {/* Linha verde */}
                  <Box
                    component="span"
                    className="hl-wrap"
                    sx={{ display: "inline-block" }}
                  >
                    <Box
                      component="span"
                      className="hl-line"
                      sx={{
                        color: "#000",
                        fontWeight: 800,
                        "&::before": {
                          content: "''",
                          width: "100%",
                          position: "absolute",
                          left: "-2%",
                          top: "70%",
                          transform: "translateY(-50%)",
                          height: "0.5em",
                          background: "#C3F628",
                          m: " 0 2%",
                          borderRadius: "8px",
                          zIndex: -1,
                          boxShadow: "0 6px 18px rgba(34,100,120,0.04)",
                        },
                      }}
                    >
                      WhatsApp
                    </Box>
                  </Box>
                </Typography>
              </Box>

              {/* Right Side - Content */}
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  O WhatsApp é uma das plataformas preferidas pelos brasileiros
                  — <strong>são mais de 165 milhões de usuários*</strong> (ou
                  96,4% da população que faz uso das redes sociais). Quando você
                  traz um link de WhatsApp nas redes sociais ou site da sua
                  empresa, só tem vantagens:
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mb: 3,
                    fontSize: "0.75rem",
                    color: "text.secondary",
                  }}
                >
                  *Dados da pesquisa Digital 2022: Brazil
                </Typography>

                {/* Benefits List */}
                <Box
                  sx={{
                    mb: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#7BEFFF",
                        fontSize: 24,
                       
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                      Otimiza a geração de Leads.
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#7BEFFF",
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                      Ofereça uma opção rápida e prática para tirar dúvidas
                      sobre produtos e serviços.
                    </Typography>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#7BEFFF",
                        fontSize: 24,
                        flexShrink: 0,
                      }}
                    />
                    <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                      Oferece uma ótima experiência ao usuário.
                    </Typography>
                  </Box>
                </Box>

                {/* CTA Button */}
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  sx={{
                    backgroundColor: "#003D5C",
                    color: "#FFFFFF",
                    py: 1.5,
                    px: 4,
                    fontSize: "1rem",
                    fontWeight: 500,
                    borderRadius: "12px",
                    textTransform: "none",
                    "&::first-letter": {
                      textTransform: "uppercase",
                    },
                    "&:hover": {
                      backgroundColor: "#002D44",
                    },
                  }}
                >
                  Gere seu link grátis <ArrowForwardIcon sx={{ fontSize: 16, marginLeft: 1 }} />
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* HowTo Section */}
        <Box
          component="section"
          aria-labelledby="howto-title"
          sx={{
            backgroundColor: "#FFFFFF",
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            {/* Title */}
            <Typography
              variant="h2"
              component="h2"
              id="howto-title"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "24px", md: "32px" },
                textAlign: "center",
                mb: 3,
                color: "#000000",
              }}
            >
              Como criar mensagens automáticas para o WhatsApp
            </Typography>

            {/* Introductory Paragraph */}
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                mb: 6,
                fontSize: { xs: "16px", md: "20px" },
                maxWidth: "800px",
                mx: "auto",
                color: "#000000",
              }}
            >
              Agora que você viu como fazer link do WhatsApp é fácil, confira
              algumas ideias para mensagens que agilizam a comunicação!
            </Typography>

            {/* Three Columns of Tips */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(3, 1fr)",
                },
                gap: 4,
              }}
            >
              {/* Left Column */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "column", xs: "row" },
                  "@media (max-width: 1105px)": {
                    flexDirection: "row", // escondido somente até 625px
                  },
                  gap: 2,
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: "#8800F7",
                    alignSelf: "center",
                    "@media (max-width: 1105px)": {
                      placeSelf: "start",
                    },
                    fontSize: 32,
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    lineHeight: 1.6,
                    textAlign: { md: "center", xs: "left" },
                  }}
                >
                  Deixe bem claro de qual empresa se trata, mencione o nome do
                  seu negócio logo na mensagem para reforçar a identificação com
                  a marca.
                </Typography>
              </Box>

              {/* Middle Column */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "column", xs: "row" },
                  "@media (max-width: 1105px)": {
                    flexDirection: "row", // escondido somente até 625px
                  },
                  gap: 2,
                }}
              >                <CheckCircleIcon
                  sx={{
                    color: "#8800F7",
                    alignSelf: "center",
                    "@media (max-width: 1105px)": {
                      placeSelf: "start",
                    },
                    fontSize: 32,
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    lineHeight: 1.6,
                    textAlign: { md: "center", xs: "left" },
                  }}
                >
                  Informe claramente os próximos passos para evitar ansiedade.
                  Por exemplo, um vendedor entrará em contato? Quanto tempo isso
                  demora?
                </Typography>
              </Box>

              {/* Right Column */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { md: "column", xs: "row" },
                  "@media (max-width: 1105px)": {
                    flexDirection: "row", // escondido somente até 625px
                  },
                  gap: 2,
                }}
              >                <CheckCircleIcon
                  sx={{
                    color: "#8800F7",
                    "@media (max-width: 1105px)": {
                      placeSelf: "start",
                    },
                    fontSize: 32,
                    mb: 1,
                    alignSelf: "center",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    lineHeight: 1.6,
                    textAlign: { md: "center", xs: "left" },
                  }}
                >
                  Faça uma comunicação humanizada, ou seja, escreva como você
                  estivesse falando com outra pessoa (até porque, está mesmo!),
                  seguindo os padrões da sua marca.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Examples Section */}
        <Box
          component="section"
          aria-labelledby="examples-title"
          sx={{
            backgroundColor: "#F8FAFA",
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            {/* Title */}
            <Typography
              variant="h2"
              component="h2"
              id="examples-title"
              sx={{
                fontWeight: 700,
                fontSize: '32px',
                textAlign: "center",
                mb: 6,
                color: "#000000",
              }}
            >
              Exemplos de mensagem para WhatsApp
            </Typography>

            {/* Three Cards with Examples */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(3, 1fr)",
                },
                gap: 3,
                mb: 6,
              }}
            >
              {/* Card 1 - Opção 1 */}
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: '12px',
                  border: '1px solid #F1F3F5',
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: '20px',
                      color: "#005A87",
                      mb: 2,
                    }}
                  >
                    Opção 1
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "16px", lineHeight: 1.6 }}
                  >
                    Olá! Obrigado por seu interesse em falar com [Nome da
                    Empresa]. Me conta qual é a sua dúvida para eu lhe fornecer
                    as melhores informações!
                  </Typography>
                </CardContent>
              </Card>

              {/* Card 2 - Opção 2 */}
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: '12px',
                  border: '1px solid #F1F3F5',
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: '20px',
                      color: "#005A87",
                      mb: 2,
                    }}
                  >
                    Opção 2
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "16px", lineHeight: 1.6 }}
                  >
                    Oi, tudo bem? Obrigado por entrar em contato com [Nome da
                    Empresa]. Qual é a sua dúvida? Assim, eu consigo ajudar você
                    rapidamente.
                  </Typography>
                </CardContent>
              </Card>

              {/* Card 3 - Opção 3 */}
              <Card
                elevation={0}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: '12px',
                  border: '1px solid #F1F3F5',
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: '20px',
                      color: "#005A87",
                      mb: 2,
                    }}
                  >
                    Opção 3
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "16px", lineHeight: 1.6 }}
                  >
                    Olá! Seja bem-vindo a/ao [Nome da Empresa]! Meu nome é [Nome
                    do Atendente], irei fazer o seu atendimento hoje. Me conta
                    como posso ajudar você! 👋
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* CTA Button */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                sx={{
                  backgroundColor: "#003D5C",
                  color: "#FFFFFF",
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: "12px",
                  textTransform: "none",
                  "&::first-letter": {
                    textTransform: "uppercase",
                  },
                  "&:hover": {
                    backgroundColor: "#002D44",
                  },
                }}
              >
                Gere seu link grátis <ArrowForwardIcon sx={{ fontSize: 16, marginLeft: 1 }} />
              </Button>
            </Box>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box
          component="section"
          aria-labelledby="faq-title"
          sx={{
            backgroundColor: "#FFFFFF",
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 2fr",
                },
                gap: 6,
                alignItems: "flex-start",
              }}
            >
              {/* Left Column - Title */}
              <Box>
                <Typography
                  variant="h2"
                  component="h2"
                  id="faq-title"
                  sx={{
                    fontWeight: 700,
                    fontSize: '24px',
                    color: "#000000",
                  }}
                >
                  Perguntas mais comuns
                </Typography>
              </Box>

              {/* Right Column - FAQ Items */}
              <Box>
                {/* Close All Button */}
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleCloseAll}
                    aria-label="Fechar todas as perguntas frequentes"
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      fontSize: "16px",
                      borderRadius: "12px",
                      border: "1px solid #000",
                      "&::first-letter": {
                        textTransform: "uppercase",
                      },
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                      "&:focus-visible": {
                        outline: "2px solid #1976d2",
                        outlineOffset: "2px",
                      },
                    }}
                  >
                    Fechar todos <ArrowForwardIcon sx={{ fontSize: 16, marginLeft: 1 }} aria-hidden="true" />
                  </Button>
                </Box>

                {/* FAQ Accordions */}
                <Box>
                  <Accordion
                    expanded={expanded.has("panel1")}
                    onChange={handleChange("panel1")}
                    sx={{
                      boxShadow: "none",
                      borderBottom: "1px solid #7BEFFF",
                      borderTop: "1px solid #7BEFFF",
                      borderRadius: "0px !important",
                      "&:before": {
                        display: "none",
                      },
                      "&.Mui-expanded": {
                        margin: 0,
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded.has("panel1") ? (
                          <ExpandLessIcon sx={{ color: "#000", transform: "rotate(180deg)" }} />
                        ) : (
                          <ExpandMoreIcon sx={{ color: "#000" }} />
                        )
                      }
                      sx={{
                        px: 0,
                        py: 2,
                        "&.Mui-expanded": {
                          minHeight: 48,
                        },
                        "& .MuiAccordionSummary-content": {
                          margin: "12px 0",
                          "&.Mui-expanded": {
                            margin: "12px 0",
                          },
                        },
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          transition: "none",
                          "& svg": {
                            transition: "none",
                          },
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: "20px",
                          color: "#000000",
                        }}
                      >
                        O que é o Gerador de link para WhatsApp?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 3 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          lineHeight: 1.6,
                          color: "#000000",
                        }}
                      >
                        O Gerador de link para WhatsApp é uma ferramenta
                        gratuita que permite criar links personalizados para
                        iniciar conversas no WhatsApp. Com ele, você pode
                        compartilhar seu número de WhatsApp de forma prática e
                        profissional em redes sociais, sites e outros canais
                        digitais.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded.has("panel2")}
                    onChange={handleChange("panel2")}
                    sx={{
                      boxShadow: "none",
                      borderBottom: "1px solid #7BEFFF",
                      "&:before": {
                        display: "none",
                      },
                      "&.Mui-expanded": {
                        margin: 0,
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded.has("panel2") ? (
                          <ExpandLessIcon sx={{ color: "#000", transform: "rotate(180deg)" }} />
                        ) : (
                          <ExpandMoreIcon sx={{ color: "#000" }} />
                        )
                      }
                      sx={{
                        px: 0,
                        py: 2,
                        "&.Mui-expanded": {
                          minHeight: 48,
                        },
                        "& .MuiAccordionSummary-content": {
                          margin: "12px 0",
                          "&.Mui-expanded": {
                            margin: "12px 0",
                          },
                        },
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          transition: "none",
                          "& svg": {
                            transition: "none",
                          },
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: "20px",
                          color: "#000000",
                        }}
                      >
                        Onde posso usar o link do WhatsApp?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 3 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          lineHeight: 1.6,
                          color: "#000000",
                        }}
                      >
                        O link do WhatsApp pode ser usado em biografias de redes
                        sociais, mensagens de email, chats e em qualquer outro
                        lugar onde você queira compartilhar um link direto para
                        o seu WhatsApp.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded.has("panel3")}
                    onChange={handleChange("panel3")}
                    sx={{
                      boxShadow: "none",
                      borderBottom: "1px solid #7BEFFF",
                      "&:before": {
                        display: "none",
                      },
                      "&.Mui-expanded": {
                        margin: 0,
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded.has("panel3") ? (
                          <ExpandLessIcon sx={{ color: "#000", transform: "rotate(180deg)" }} />
                        ) : (
                          <ExpandMoreIcon sx={{ color: "#000" }} />
                        )
                      }
                      sx={{
                        px: 0,
                        py: 2,
                        "&.Mui-expanded": {
                          minHeight: 48,
                        },
                        "& .MuiAccordionSummary-content": {
                          margin: "12px 0",
                          "&.Mui-expanded": {
                            margin: "12px 0",
                          },
                        },
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          transition: "none",
                          "& svg": {
                            transition: "none",
                          },
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: "20px",
                          color: "#000000",
                        }}
                      >
                        Quais as vantagens de ter um link do seu WhatsApp?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 3 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          lineHeight: 1.6,
                          color: "#000000",
                        }}
                      >
                        Ter um link do seu WhatsApp permite compartilhar de
                        forma prática o seu contato do WhatsApp com clientes e
                        pessoas interessadas nos seus produtos ou serviços. Isso
                        ajuda a responder dúvidas, auxiliar no processo de
                        compra e fortalecer relacionamentos.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded.has("panel4")}
                    onChange={handleChange("panel4")}
                    sx={{
                      boxShadow: "none",
                      "&:before": {
                        display: "none",
                      },
                      "&.Mui-expanded": {
                        margin: 0,
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded.has("panel4") ? (
                          <ExpandLessIcon sx={{ color: "#000", transform: "rotate(180deg)" }} />
                        ) : (
                          <ExpandMoreIcon sx={{ color: "#000" }} />
                        )
                      }
                      sx={{
                        px: 0,
                        py: 2,
                        "&.Mui-expanded": {
                          minHeight: 48,
                        },
                        "& .MuiAccordionSummary-content": {
                          margin: "12px 0",
                          "&.Mui-expanded": {
                            margin: "12px 0",
                          },
                        },
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          transition: "none",
                          "& svg": {
                            transition: "none",
                          },
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: "20px",
                          color: "#000000",
                        }}
                      >
                        Como gerar link para WhatsApp?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 3 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          lineHeight: 1.6,
                          color: "#000000",
                        }}
                      >
                        Para gerar um link para WhatsApp usando o gerador, é
                        necessário acessar a ferramenta, preencher o número do
                        WhatsApp, email e cargo. Opcionalmente, pode-se criar
                        uma mensagem para facilitar a interação. As informações
                        de email e cargo não são visíveis para quem acessa o
                        link; apenas o número do WhatsApp e a mensagem são
                        compartilhados.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />

      <WhatsAppFixed />

      <SnackbarAlert
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </>
  );
}
