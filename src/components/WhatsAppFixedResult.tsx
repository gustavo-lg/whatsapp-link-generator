import { Box } from "@mui/material";
import whatsappCard from "../assets/whatsapp-card.webp";

export function WhatsAppFixedResult() {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "-0.7%",
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
          right: "-5%",
          top: "7%",
          transform: "translateX(-50%)",
          zIndex: 1,
        },
        "@media (min-width: 768px) and (max-width: 1024px)": {
          right: "-8%",
          top: "calc(23% - 17vh)",
          transform: "translateX(-50%)",
          zIndex: 1,
        },
      }}
    >
      <Box
        component="img"
        src={whatsappCard}
        alt="Ícone do WhatsApp - Link gerado"
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
            maxWidth: 150,
          },
          height: "auto",
          transform: "rotate(-12.76deg)",
        }}
      />
    </Box>
  );
}
