import { z } from "zod";

export const sendMailSchema = z.object({
  name: z.string().min(3, "O campo nome é obrigatório."),
  email: z
    .string()
    .min(1, "O campo email é obrigatório.")
    .email("Forneça um email válido."),
  message: z.string().min(1, "O campo mensagem é obrigatório."),
});
