import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import { Bell } from "lucide-react";
import { api } from "../../../shared/api";
import { useUser } from "../../../shared/hooks";

export const Navbar = () => {
  const { data } = useUser();

  if (!data) {
    return null;
  }

  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => api.post("/auth/logout"),
  });

  return (
    <nav className="h-15.5 flex items-center justify-between px-4  bg-white ">
      <h1 className="text-2xl font-bold ">Dashboard</h1>
      <div className="flex items-center gap-6">
        <Button size="sm" variant="ghost" isIconOnly>
          <Bell className="size-5 text-neutral-400" />
        </Button>
        <Dropdown>
          <Button
            className="rounded-full hover:bg-transparent!"
            variant="ghost"
            isIconOnly
          >
            <Avatar size="sm" className="rounded-full">
              <Avatar.Image alt="Blue" src={data.avatarUrl || ""} />
              <Avatar.Fallback className="rounded-full">
                {data.username?.charAt(0) || ""}
              </Avatar.Fallback>
            </Avatar>
          </Button>

          <Dropdown.Popover>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => logoutMutation.mutate()}
                variant="danger"
                id="Log out"
                textValue="Log out"
              >
                <Label>Log out</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </div>
    </nav>
  );
};
3;
