"use server";

import { FormDaftarSchema, FormMasukSchema } from "@/app/lib/zod";
import { prisma } from "@/app/lib/prisma";
import { hashSync, compareSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
// import { signIn } from "../../../../auth";

export const daftar = async (prevState: unknown, formData: FormData) => {
  try {
    const validatedFields = FormDaftarSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validatedFields.data;
    const hashedPassword = hashSync(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { message: "Email telah digunakan." };
  }

  redirect("/masuk");
};

export const masuk = async (prevState: unknown, formData: FormData) => {
  try {
    const validatedFields = FormMasukSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validatedFields.data;

    const validatedEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!validatedEmail) throw "Email tidak ditemukan";

    const comparePassword = compareSync(password, validatedEmail.password);

    if (!comparePassword) throw "Password tidak cocok";
  } catch (error) {
    return { message: error };
  }

  redirect("/");
};
