import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type SignInUserFormType = z.infer<typeof signInUserFormSchema>;

export const signInUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail is required")
    .email("E-mail format is invalid")
    .toLowerCase(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signInUserResolver = zodResolver(signInUserFormSchema);
