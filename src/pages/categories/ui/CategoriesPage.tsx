import { CreateCategoryModalEntry } from "@/features/categories/create-category-modal";
import { SearchCategoryEntry } from "@/features/categories/search";
import { CategoryTableEntry } from "@/widgets/category/table";

export const CategoriesPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 ">
      <div className="flex items-center justify-between">
        <SearchCategoryEntry />
        <CreateCategoryModalEntry />
      </div>

      <CategoryTableEntry />
    </div>
  );
};
