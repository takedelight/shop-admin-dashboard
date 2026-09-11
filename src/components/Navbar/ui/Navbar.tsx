import { Bell, User } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="h-[62px] flex items-center justify-between px-5 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-[#23272E]">Dashboard</h1>
      <div className="flex items-center gap-6">
        <button type="button" className="relative">
          <Bell className="size-6 text-[#8B909A]" />
          <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 text-[10px] font-semibold text-white bg-[#EA5455] rounded-full">
            4
          </span>
        </button>
        <div className="relative">
          <div className="flex items-center justify-center size-9 rounded-full bg-[#7367F0]">
            <User className="size-5 text-white" />
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#28C76F] border-2 border-white rounded-full" />
        </div>
      </div>
    </nav>
  );
};
