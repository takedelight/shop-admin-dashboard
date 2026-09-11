import { FolderTree, House, Package, ShoppingCart, Users } from "lucide-react";

export const MAIN_MENU_ITEMS = [
  {
    alias: "Dashboard",
    href: "/",
    icon: House,
  },
  {
    alias: "Order Management",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    alias: "Categories",
    href: "/categories",
    icon: FolderTree,
  },
  {
    alias: "Customers",
    href: "/customers",
    icon: Users,
  },
];

export const PRODUCTS_MENU_ITEMS = [
  {
    alias: "All Products",
    href: "/products",
    icon: Package,
  },
];
