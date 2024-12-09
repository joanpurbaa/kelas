import { prisma } from "@/app/lib/prisma";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export const buatKelas = async (prevState: unknown, formData: FormData) => {
  try {
    const session = await auth();
    const name = formData.get("name") as string;
    const background = formData.get("background") as string;

    await prisma.kelas.create({
      data: {
        userId: session?.user?.id,
        name,
        background,
        teacherName: session?.user?.name,
      },
    });

    redirect("/");
  } catch (error) {
    return { message: error };
  }
};
