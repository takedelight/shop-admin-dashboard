import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { api } from "../../../../shared/api";
import { type LoginFormData, loginSchema } from "../schema/login.schema";

export const useLogin = () => {
  const navigate = useNavigate();

  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginFormData) => {
      return await api.post("/auth/login", data).then((res) => res.data);
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return {
    form,
    loginMutation,
    onSubmit,
  };
};
