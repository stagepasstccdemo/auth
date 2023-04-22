import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type SignInUserForm = z.infer<typeof signInUserFormSchema>;

export const signInUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
});

export const signInUserResolver = zodResolver(signInUserFormSchema);
