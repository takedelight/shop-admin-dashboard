import type { Category } from "@/entity/сategory";
import { DeleteCategoryModalEntry } from "@/features/categories/delete-category-modal";
import { ToggleCategoryVisibleEntry } from "@/features/categories/toggle-visible";

interface CategoryActionsProps {
  category: Category;
}

export const CategoryActions = ({ category }: CategoryActionsProps) => {
  return (
    <div className="flex items-center justify-end gap-2">
      <ToggleCategoryVisibleEntry isActive={category.isActive} />

      <DeleteCategoryModalEntry
        categoryName={category.name}
        categoryId={category.id}
      />
    </div>
  );
};
