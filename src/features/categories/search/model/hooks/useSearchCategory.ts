import { useDebounce } from "@/shared/hooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useSearchCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");

  const debouncedValue = useDebounce<string>(value, 300);

  useEffect(() => {
    const nextQuery = debouncedValue.trim();
    const currentQuery = searchParams.get("q") ?? "";

    // Синхронизируем URL только при реальном изменении, чтобы не зациклиться
    if (nextQuery === currentQuery) return;

    const params = new URLSearchParams(searchParams);

    if (nextQuery) {
      params.set("q", nextQuery);
    } else {
      params.delete("q");
    }

    setSearchParams(params, { replace: true });
  }, [debouncedValue, searchParams, setSearchParams]);

  return {
    value,
    setValue,
  };
};
