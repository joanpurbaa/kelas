import { SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";
import SubjectsMenu from "./_components/SubjectsMenu";
import { SessionProvider } from "next-auth/react";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          {children}
          <SubjectsMenu />
        </main>
      </SidebarProvider>
    </SessionProvider>
  );
};

export default Home;
