"use client";

import Link from "next/link";
import Header from "../_components/Header";
import FormField from "../_components/FormField";
import FormButton from "../_components/FormButton";
import { useState } from "react";
import { useActionState } from "react";
import { daftar } from "@/app/actions/auth";

const Daftar = () => {
  const [state, action] = useActionState(daftar, null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Header />
      <form className="w-80 mt-7" action={action}>
        <ul className="space-y-5">
          <li>
            <FormField
              id="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Masukkan Email"
            />
            {state?.error?.email && (
              <p className="mt-1 text-red-500">{state.error.email}</p>
            )}
            {state?.message ? (
              <p className="mt-1 text-red-500">{state.message}</p>
            ) : null}
          </li>
          <li>
            <FormField
              id="password"
              label="Password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Masukkan Password"
            />
            {state?.error?.password && (
              <p className="mt-1 text-red-500">{state.error.password}</p>
            )}
          </li>
          <li>
            <FormButton value="Buat akun" />
          </li>
          <li>
            <p className="mt-3 text-xs md:text-base">
              Sudah punya akun?{" "}
              <Link className="text-sky-500 underline" href="/masuk">
                Masuk
              </Link>
            </p>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Daftar;
