import { SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar";
import AppSidebar from "../_components/AppSidebar";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Home;
