"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "../_components/Header";
import FormField from "../_components/FormField";
import Image from "next/image";

const Login = () => {
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
              Masuk
            </Button>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-full h-0.5 bg-gray-300 rounded-md"></div>
            <p className="text-zinc-800">atau</p>
            <div className="w-full h-0.5 bg-gray-300 rounded-md"></div>
          </li>
          <li className="flex gap-x-3">
            <div className="w-full flex justify-center border rounded-md p-1 py-1.5">
              <Image
                src="/googleIcon.svg"
                width={30}
                height={30}
                alt="Google logo's"
              />
            </div>
            <div className="w-full flex justify-center border rounded-md p-1 py-1.5">
              <Image
                src="/githubLogo.svg"
                width={30}
                height={30}
                alt="Google logo's"
              />
            </div>
          </li>
          <li>
            <p className="mt-3">
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

export default Login;
