import { SidebarProvider } from "@/app/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import SubjectsMenu from "./components/SubjectsMenu";
import { SessionProvider } from "next-auth/react";
import JoinOrCreateKelasButton from "./components/JoinOrCreateKelasButton";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-3">
          <JoinOrCreateKelasButton />
          {children}
          <SubjectsMenu />
        </main>
      </SidebarProvider>
    </SessionProvider>
  );
};

export default Home;
