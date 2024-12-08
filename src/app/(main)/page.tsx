"use client";

import { SidebarProvider } from "@/app/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import SubjectsMenu from "./components/SubjectsMenu";
import { SessionProvider } from "next-auth/react";
import JoinOrCreateKelasButton from "./components/JoinOrCreateKelasButton";
import CreateKelasModalBox from "./components/CreateKelasModalBox";
import { useState } from "react";

const Home = ({ children }: { children: React.ReactNode }) => {
  const [buatKelas, setBuatKelas] = useState(false);

  const openModal = () => setBuatKelas(true);
  const closeModal = () => setBuatKelas(false);

  return (
    <>
      {buatKelas && <CreateKelasModalBox onClose={closeModal} />}
      <SessionProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full p-3">
            <JoinOrCreateKelasButton onClick={openModal} />
            {children}
            <SubjectsMenu />
          </main>
        </SidebarProvider>
      </SessionProvider>
    </>
  );
};

export default Home;
