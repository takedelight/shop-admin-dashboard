import { useQuery } from "@tanstack/react-query";
import type { User } from "../../entity/user";
import { api } from "../api";

export const useUser = () => {
  return useQuery({
    queryKey: ["get_me"],
    refetchOnWindowFocus: false,
    queryFn: async () => api.get<User>("/user/me").then((res) => res.data),
  });
};
