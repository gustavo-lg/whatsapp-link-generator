import { Box } from "@mui/material";
import whatsappCard from "../assets/whatsapp-card.webp";

export function WhatsAppFixed() {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "1.3%",
        top: "-7%",
        zIndex: 1000,
        display: { xs: "block", md: "block" },
        "@media (max-height: 720px)": {
          top: "75%",
        },
        "@media (min-height: 901px)": {
          top: "45%",
        },
        "@media (max-width: 600px)": {
          left: "50%",
          top: "97%",
          transform: "translateX(-50%)",
          zIndex: 1,
        },
        "@media (min-width: 768px) and (max-width: 1024px)": {
          left: "7%",
          top: "calc(67% - 17vh)",
          transform: "translateX(-50%)",
          zIndex: 1,
        },
      }}
    >
      <Box
        component="img"
        src={whatsappCard}
        alt="Ícone do WhatsApp - Gerador de link"
        loading="lazy"
        sx={{
          width: "auto",
          "@media (max-height: 720px)": {
            maxWidth: 200,
          },
          "@media (min-height: 901px)": {
            maxWidth: 344,
          },
          "@media (max-width: 600px)": {
            maxWidth: 110,
          },
          "@media (min-width: 768px) and (max-width: 1024px)": {
            maxWidth: 110,
          },
          height: "auto",
          transform: "rotate(-12.76deg)",
        }}
      />
    </Box>
  );
}
