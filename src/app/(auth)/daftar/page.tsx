"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "../_components/Header";
import FormField from "../_components/FormField";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email);
    console.log(username);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Header />
      <form onSubmit={formHandler} className="w-80 mt-7" action="">
        <ul className="space-y-5">
          <li>
            <FormField
              id="email"
              label="Email"
              placeholder="Masukkan Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <FormField
              id="username"
              label="Username"
              placeholder="Masukkan Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li>
            <Button type="submit" className="w-full">
              Buat akun
            </Button>
            <p className="mt-3">
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