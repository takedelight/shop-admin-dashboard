import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  createCategorySchema,
  type CategoryFormData,
} from "../schemas/create-category.schema";

export const useCreateCategory = () => {
  const form = useForm<CategoryFormData>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      icon: "",
      name: "",
      slug: "",
    },
  });

  const createCategoryMutation = useMutation({
    mutationKey: ["create_category"],
    mutationFn: async (data: CategoryFormData) => {
      console.log("Creating category with data:", data);
    },
    onSuccess: () => {
      form.reset();
    },
  });

  return {
    form,
    onSubmit: (data: CategoryFormData) =>
      createCategoryMutation.mutateAsync(data),
    isLoading: createCategoryMutation.isPending,
  };
};
