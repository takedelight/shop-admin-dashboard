import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { api } from "../../../../shared/api";
import {
  type RegisterFormData,
  registerSchema,
} from "../schema/register.schema";

export const useRegister = () => {
  const form = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const registerMutation = useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: RegisterFormData) => {
      return await api
        .post("/auth/register", {
          email: data.email,
          password: data.password,
        })
        .then((res) => res.data);
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    registerMutation.mutate(data);
  };

  return {
    form,
    registerMutation,
    onSubmit,
  };
};
