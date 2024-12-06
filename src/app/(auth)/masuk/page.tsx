"use client";

import Link from "next/link";
import Header from "../_components/Header";
import FormField from "../_components/FormField";
import LoginWith from "../_components/LoginWith";
import FormButton from "../_components/FormButton";
import { useState } from "react";
import { useActionState } from "react";
import { masuk } from "@/app/actions/auth";
import { CircleX } from "lucide-react";

const Masuk = () => {
  const [state, action] = useActionState(masuk, null);

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
          {state?.message ? (
            <li className="bg-red-100 flex justify-center text-red-500 border border-red-300 p-3 rounded-md">
              <div className="flex items-center gap-x-3">
                <CircleX />
                <p className="text-red-500">{state.message}</p>
              </div>
            </li>
          ) : null}
          <li>
            <FormField
              id="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Masukkan Email"
            />
          </li>
          <li>
            <FormField
              id="password"
              label="Password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Masukkan password"
            />
            {state?.error && (
              <p className="mt-1 text-red-500">{state.error.password}</p>
            )}
          </li>
          <li>
            <FormButton value="Masuk" />
          </li>
          <LoginWith />
          <li>
            <p className="mt-3 text-xs md:text-base">
              Belum punya akun?{" "}
              <Link className="text-sky-500 underline" href="/daftar">
                Buat akun
              </Link>
            </p>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Masuk;
