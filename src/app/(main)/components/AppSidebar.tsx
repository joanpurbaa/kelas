import Image from "next/image";

import {
  Settings,
  ChevronUp,
  UserCircle,
  LogOut,
  ChevronDown,
  House,
  Book,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarMenuSubButton,
  SidebarMenu,
  SidebarMenuButton,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarGroupContent,
} from "@/app/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/app/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { signOut, auth } from "../../../../auth";
import { redirect } from "next/navigation";

const AppSidebar = () => {
  // const session = await auth();

  // if (!session) {
  //   redirect("/masuk");
  // }

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex items-center gap-x-2">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <div>
              <h3 className="text-sm font-bold">Kelas</h3>
              <p className="text-sm">Pembelajaran digital</p>
            </div>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton>
                <House />
                Beranda
              </SidebarMenuButton>
              <SidebarMenuItem>
                <Collapsible defaultOpen className="group/collapsible">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Book />
                      Mata Pelajaran
                      <SidebarMenuBadge>
                        <ChevronDown />
                      </SidebarMenuBadge>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubButton>Biologi</SidebarMenuSubButton>
                      <SidebarMenuSubButton>Matematika</SidebarMenuSubButton>
                      <SidebarMenuSubButton>Sejarah</SidebarMenuSubButton>
                      <SidebarMenuSubButton>Geografi</SidebarMenuSubButton>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
              <SidebarMenuButton>
                <Settings />
                Setelan
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <div className="flex items-center gap-x-1">
                  <UserCircle />
                  {/* <p>{session?.user?.name}</p> */}
                </div>
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem>
                <User />
                <span>Akun</span>
              </DropdownMenuItem>
              <form
                // action={async () => {
                //   await signOut();
                // }}
              >
                <button type="submit">
                  <DropdownMenuItem>
                    <LogOut />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </button>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
