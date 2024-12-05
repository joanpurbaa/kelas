import { z } from "zod";

export const FormDaftarSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }).trim(),
  password: z
    .string({ required_error: "Password wajib diisi" })
    .trim()
    .superRefine((value, ctx) => {
      if (value.length < 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          type: "string",
          minimum: 8,
          inclusive: true,
          message: "Minimal 8 karakter",
        });
      } else if (!/[a-bA-B]/.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Harus ada huruf",
        });
      } else if (!/[0-9]/.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Harus ada angka",
        });
      } else if (!/[^a-zA-Z0-9]/.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Harus ada karakter spesial",
        });
      }
    }),
});

export const FormMasukSchema = z.object({
  email: z.string().email({ message: "Email tidak valid" }).trim(),
  password: z.string({ required_error: "Password wajib diisi" }).trim(),
});

export type FormState =
  | {
      error?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
