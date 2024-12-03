import { SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";
import SubjectsMenu from "./_components/SubjectsMenu";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
        <SubjectsMenu />
      </main>
    </SidebarProvider>
  );
};

export default Home;
