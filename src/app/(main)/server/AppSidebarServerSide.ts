"use server";

import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

export const AppSidebarServerSide = async () => {
  const session = await auth();
  const name = session?.user?.name;

  if(!session){
    redirect("/masuk");
  }

  return name;
};
