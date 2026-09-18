import {
  Headphones,
  Laptop,
  Monitor,
  Smartphone,
  Tablet,
  Tv,
} from "lucide-react";

export const APPLIANCE_ICONS = [
  { name: "table", label: "Планшет", icon: Tablet },
  { name: "monitor", label: "ПК", icon: Monitor },
  { name: "laptop", label: "Ноутбук", icon: Laptop },
  { name: "headphones", label: "Наушники", icon: Headphones },
  { name: "smartphone", label: "Смартфон", icon: Smartphone },
  { name: "tv", label: "Телевізор", icon: Tv },
] as const;
