import type { Category } from "@/entity/сategory";
import { api } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const useCategoryTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const rowsPerPage = Number(searchParams.get("limit")) || 10;

  const { data, isLoading } = useQuery({
    queryKey: ["categories", page, rowsPerPage],
    queryFn: async () =>
      api
        .get<Category[]>("/category", {
          params: { page, limit: rowsPerPage },
        })
        .then((res) => res.data),
  });

  const categories = data ?? [];
  const totalItems = categories.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage) || 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const start = totalItems === 0 ? 0 : (page - 1) * rowsPerPage + 1;
  const end = Math.min(page * rowsPerPage, totalItems);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    setSearchParams(params);
  };

  const handleRowsPerPageChange = (newLimit: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("limit", String(newLimit));
    params.set("page", "1");
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
    rowsPerPage,
    isLoading,
    handlePageChange,
    handleRowsPerPageChange,
  };
};
