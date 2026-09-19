import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { MOCK_CATEGORIES } from "../const";

export const useCategoryTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const rowsPerPage = Number(searchParams.get("limit")) || 10;

  const totalItems = MOCK_CATEGORIES.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage) || 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginatedCategories = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return MOCK_CATEGORIES.slice(start, start + rowsPerPage);
  }, [page, rowsPerPage]);

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
    categories: paginatedCategories,
    totalItems,
    page,
    totalPages,
    pages,
    start,
    end,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
  };
};
