import { api } from "@/shared/api";
import { CACHE_KEYS } from "@/shared/const";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useDeleteCategoryModal = () => {
  const queryClient = useQueryClient()

  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = () => {
    setIsOpen((p) => !p);
  };

  const { isPending,mutate} = useMutation({
    mutationKey: [CACHE_KEYS.DELETE_CATEGORY],
    mutationFn: async (catId: string) => await api.delete(`/category/${catId}`),
    onSuccess: async () => {
      setIsOpen(false);

      queryClient.invalidateQueries({queryKey:[CACHE_KEYS.GET_CATEGORIES]})
    }
  })

  const handleDeleteCategory = (catId: string) => {
    mutate(catId)
  }

  return {
    isOpen,
    onOpenChange,
    setIsOpen,
    isPending,
    handleDeleteCategory
  };
};
