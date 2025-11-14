import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { FormData } from "../types/form";
import { isValidPhone, formatPhoneToWa } from "../utils/formatPhone";

const formSchema = z.object({
  telefone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .refine((phone) => isValidPhone(phone), {
      message: "Telefone inválido. Use o formato (99) 99999-9999",
    }),
  email: z.string().email("Email inválido"),
  cargo: z.string().min(1, "Cargo é obrigatório"),
  mensagem: z.string().optional(),
  aceitaPolitica: z.boolean().optional(),
});

export function useFormLink() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      telefone: "",
      email: "",
      cargo: "" as FormData["cargo"],
      mensagem: "",
      aceitaPolitica: true,
    },
  });

  const submitForm = async (data: FormData): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      // Preparar payload para o webhook
      const webhookPayload = {
        nome: data.email.split("@")[0] || "Usuário", // Usa parte do email como nome
        whatsapp: data.telefone,
        cargo: data.cargo,
        mensagem: data.mensagem || undefined,
        origem: "Gerador de Link WhatsApp",
      };

      // Enviar POST para o webhook do Zapier
      // Usando FormData para evitar problemas de CORS com Content-Type
      const formData = new FormData();
      formData.append("nome", webhookPayload.nome);
      formData.append("whatsapp", webhookPayload.whatsapp);
      formData.append("cargo", webhookPayload.cargo);
      if (webhookPayload.mensagem) {
        formData.append("mensagem", webhookPayload.mensagem);
      }
      formData.append("origem", webhookPayload.origem);

      try {
        await fetch(
          "https://hooks.zapier.com/hooks/catch/13309391/uie4g8v/",
          {
            method: "POST",
            body: formData,
          }
        );
      } catch (webhookError) {
        // Não bloqueamos o fluxo se o webhook falhar
        // O link do WhatsApp ainda será gerado
        console.warn("Aviso: Não foi possível enviar dados ao webhook", webhookError);
      }

      // Gerar link do WhatsApp
      const phoneWa = formatPhoneToWa(data.telefone);
      const message = encodeURIComponent(
        data.mensagem || "Olá! Gostaria de mais informações."
      );
      const whatsappLink = `https://wa.me/${phoneWa}?text=${message}`;

      return whatsappLink;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    submitForm,
    loading,
    error,
  };
}

