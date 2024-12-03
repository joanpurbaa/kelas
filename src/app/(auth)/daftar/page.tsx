"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Header from "../_components/Header";
import FormField from "../_components/FormField";
import LoginWith from "../_components/LoginWith";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { daftar } from "@/app/actions/auth";

const Register = () => {
  const [state, action] = useActionState(daftar, undefined);
  const { pending } = useFormStatus();

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
              <p className="mt-1 text-red-500 italic">{state.error.email}</p>
            )}
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
              <p className="mt-1 text-red-500 italic">{state.error.password}</p>
            )}
          </li>
          <li>
            <Button
              disabled={pending}
              type="submit"
              className="w-full text-xs md:text-base"
            >
              Buat akun
            </Button>
          </li>
          <LoginWith />
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

export default Register;
