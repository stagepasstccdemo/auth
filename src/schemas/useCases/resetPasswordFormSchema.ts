import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type ResetPasswordType = z.infer<typeof resetPasswordFormSchema>;

export const resetPasswordFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
});

export const resetPasswordResolver = zodResolver(resetPasswordFormSchema);
