import { api } from "@/shared/api";
import { CACHE_KEYS } from "@/shared/const";
import { useQuery } from "@tanstack/react-query";

interface CategoriesListResponse {
  items: Array<{ id: string; name: string }>;
  totalItems: number;
}

export const useCategoryOptions = () => {
  const { data, isLoading } = useQuery({
    queryKey: [CACHE_KEYS.GET_CATEGORIES, "options"],
    queryFn: async () =>
      api
        .get<CategoriesListResponse>("/category", {
          params: { page: 1, limit: 100 },
        })
        .then((res) => res.data),
    refetchOnWindowFocus: false,
    select: (response) => response.items,
  });

  return { options: data ?? [], isLoading };
};
