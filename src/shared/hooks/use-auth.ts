import { useQuery } from "@tanstack/react-query";
import type { User } from "../../entity/user";
import { api } from "../api";

export const useAuth = () => {
  return useQuery({
    queryKey: ["check_auth"],
    refetchOnWindowFocus: false,
    queryFn: async () => api.get<User>("/user/me").then((res) => res.data),
  });
};
