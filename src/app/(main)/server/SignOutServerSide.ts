"use server";

import { signOut } from "../../../../auth";

export const SignOutServerSide = async () => {
  await signOut();
};
