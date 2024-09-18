import { z } from "zod";

const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),

  email: z.string().email({ message: "Formato de correo no válido" }),

  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
export { registerSchema };

const loginSchema = z.object({
  email: z.string().email({ message: "Formato de correo no válido" }),

  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export { loginSchema };
