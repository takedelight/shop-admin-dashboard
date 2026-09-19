import { useDebounce } from "@/shared/hooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useSearchCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");

  const debouncedValue = useDebounce<string>(value, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedValue.trim()) {
      params.set("q", debouncedValue.trim());
    } else {
      params.delete("q");
    }

    setSearchParams(params, { replace: true });
  }, [debouncedValue]);

  return {
    value,
    setValue,
  };
};
