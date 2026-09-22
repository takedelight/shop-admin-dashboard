import type { Category } from "@/entity/сategory";
import { api } from "@/shared/api";
import { CACHE_KEYS } from "@/shared/const";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const useCategoryTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const { data, isLoading } = useQuery({
    queryKey: [CACHE_KEYS.GET_CATEGORIES, page, limit],
    queryFn: async () =>
      api
        .get<{ items: Category[]; totalItems: number }>("/category", {
          params: { page,  limit },
        })
        .then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  const categories = data?.items ?? [];
  const totalItems = data?.totalItems ?? 0;
  const totalPages = Math.ceil(totalItems / limit) || 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const start = totalItems === 0 ? 0 : (page - 1) * limit + 1;
  const end = Math.min(page * limit, totalItems);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);

    if (newPage <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(newPage));
    }

    setSearchParams(params);
  };


  const handleRowsPerPageChange = (limit: number) => {
    const params = new URLSearchParams(searchParams);

    params.delete("page");

    if (limit === 10) {
      params.delete("offset");
    } else {
      params.set("offset", String(limit));
    }

    setSearchParams(params);
  };
  return {
    categories,
    totalItems,
    page,
    totalPages,
    pages,
    start,
    end,
    limit,
    isLoading,
    handlePageChange,
    handleRowsPerPageChange,
  };
};
