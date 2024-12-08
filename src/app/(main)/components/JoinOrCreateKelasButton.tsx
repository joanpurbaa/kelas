import { Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { SidebarTrigger } from "@/app/components/ui/sidebar";

const JoinOrCreateKelasButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <SidebarTrigger />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-start gap-x-2 text-white bg-sky-400 hover:bg-sky-500 rounded-md p-2">
            <Plus />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              Gabung kelas
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={onClick}>
              Buat kelas
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default JoinOrCreateKelasButton;
