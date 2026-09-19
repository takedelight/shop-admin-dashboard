import { SearchField } from "@heroui/react";
import { useSearchCategory } from "../model/hooks/useSearchCategory";

export const SearchCategoryEntry = () => {
  const { setValue, value } = useSearchCategory();

  return (
    <SearchField name="search" value={value} onChange={setValue}>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-70" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
};
