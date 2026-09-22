import { api } from "@/shared/api";
import { CACHE_KEYS } from "@/shared/const";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  createCategorySchema,
  type CategoryFormData,
} from "../schemas/create-category.schema";

export const useCreateCategory = () => {
  const queryClient = useQueryClient()

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
    mutationKey: [CACHE_KEYS.CREATE_CATEGORY],
    mutationFn: async (data: CategoryFormData) => {
      await api.post('/category', data);
    },
    onSuccess: async () => {
      form.reset();
      setOpen(false)
      await queryClient.invalidateQueries({queryKey:[CACHE_KEYS.GET_CATEGORIES]})
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
