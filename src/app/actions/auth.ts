import { FormDaftarSchema, FormState } from "@/app/lib/zod";

export const daftar = async (state: FormState, formData: FormData) => {
  const validatedFields = FormDaftarSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }
};
