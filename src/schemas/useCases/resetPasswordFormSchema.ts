import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type ResetPasswordType = z.infer<typeof resetPasswordFormSchema>;

export const resetPasswordFormSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail is required")
    .email("E-mail format is invalid")
    .toLowerCase(),
});

export const resetPasswordResolver = zodResolver(resetPasswordFormSchema);
