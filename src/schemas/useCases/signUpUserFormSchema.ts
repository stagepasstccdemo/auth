import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type SignUpUserType = z.infer<typeof signUpUserSchema>;

export const signUpUserSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail is required")
    .email("E-mail format is invalid")
    .toLowerCase(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  password_confirmation: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .refine((data: any) => data.password === data.password_confirmation, {
      message: "Passwords do not match",
      path: ["password_confirmation"],
    }),
});

export const signUpUserResolver = zodResolver(signUpUserSchema);
