import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../../shared/hooks";
import { Navbar } from "../../Navbar";
import { MAIN_MENU_ITEMS, PRODUCTS_MENU_ITEMS } from "../model/const";

export const RootLayout = () => {
  const { data } = useAuth();
  const navigate = useNavigate();

  if (!data) {
    navigate("/auth/login");
  }

  console.log(data);

  return (
    <div className="flex min-h-screen">
      <aside className="w-65 h-screen bg-white">
        <div className="py-3.75 px-7.5">
          <h3 className="uppercase text-xs text-[#8B909A]">Main Menu</h3>
        </div>
        <ul className="flex flex-col gap-2 px-3.5">
          {MAIN_MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.alias === "Dashboard";

            return (
              <li key={item.alias}>
                <a
                  href={item.href}
                  className={`py-2.25 px-4 text-sm flex items-center gap-2 rounded-md transition-colors ease-in-out duration-100 ${
                    isActive
                      ? "bg-[#F2F4F7] text-[#23272E] font-semibold"
                      : "text-[#8B909A] hover:bg-gray-200 hover:text-[#23272E]"
                  }`}
                >
                  <Icon className="size-5" />
                  {item.alias}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="py-3.75 px-7.5 mt-2">
          <h3 className="uppercase text-xs text-[#8B909A]">Products</h3>
        </div>
        <ul className="flex flex-col gap-2 px-3.5">
          {PRODUCTS_MENU_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.alias}>
                <a
                  href={item.href}
                  className="py-2.25 px-4 text-sm flex items-center gap-2 rounded-md text-[#8B909A] transition-colors ease-in-out duration-100 hover:bg-gray-200 hover:text-[#23272E]"
                >
                  <Icon className="size-5" />
                  {item.alias}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="flex-1 flex flex-col">
        <main className="flex-1 flex flex-col  bg-neutral-50">
          <Navbar />
          <div className="px-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
