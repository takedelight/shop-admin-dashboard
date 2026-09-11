import { Avatar, Button } from "@heroui/react";
import { Bell } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="h-15.5 flex items-center justify-between px-4  bg-white ">
      <h1 className="text-2xl font-bold ">Dashboard</h1>
      <div className="flex items-center gap-6">
        <Button size="sm" variant="ghost" isIconOnly>
          <Bell className="size-5 text-neutral-400" />
        </Button>

        <Avatar size="sm" className="rounded-full">
          <Avatar.Image
            alt="Blue"
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
          />
          <Avatar.Fallback className="rounded-full">B</Avatar.Fallback>
        </Avatar>
      </div>
    </nav>
  );
};
3;
