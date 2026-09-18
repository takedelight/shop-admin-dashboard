import { APPLIANCE_ICONS } from "../const/const";

export const getIconByName = (name: string) =>
  APPLIANCE_ICONS.find((i) => i.name === name)?.icon;
