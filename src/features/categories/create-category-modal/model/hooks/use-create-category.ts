import { api } from "@/shared/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  createCategorySchema,
  type CategoryFormData,
} from "../schemas/create-category.schema";

export const useCreateCategory = () => {
  const [isOpen,setOpen] = useState(false)


  const form = useForm<CategoryFormData>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      icon: "",
      name: "",
      slug: "",
      isActive: true,
    },
  });

  const createCategoryMutation = useMutation({
    mutationKey: ["create_category"],
    mutationFn: async (data: CategoryFormData) => {
      await api.post('/category', data);
    },
    onSuccess: () => {
      form.reset();
      setOpen(false)
    },
  });

  return {
    form,
    onSubmit: (data: CategoryFormData) =>
      createCategoryMutation.mutateAsync(data),
    isLoading: createCategoryMutation.isPending,
    isOpen,
    setOpen
  };
};
