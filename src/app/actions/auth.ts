"use server";

import { FormDaftarSchema, FormMasukSchema } from "@/app/lib/zod";
import { prisma } from "@/app/lib/prisma";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";
import { signIn } from "../../../auth";
import { AuthError } from "next-auth";

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
  const validatedFields = FormMasukSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Email atau password salah" };
        default:
          return { message: "Ada yang salah" };
      }
    }

    throw error;
  }

  redirect("/");
};

export const loginByGoogle = async () => {
  await signIn("google");
};
