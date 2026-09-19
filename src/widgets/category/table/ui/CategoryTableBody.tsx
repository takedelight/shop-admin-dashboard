import type { Category } from "@/entity/сategory";
import { Table } from "@heroui/react";
import { CategoryRow } from "./CategoryRow";
import { CategoryTableEmptyState } from "./CategoryTableEmptyState";

interface CategoryTableBodyProps {
  categories: Category[];
}

export const CategoryTableBody = ({ categories }: CategoryTableBodyProps) => {
  return (
    <Table.Body className="relative" renderEmptyState={CategoryTableEmptyState}>
      {categories.map((category) => (
        <CategoryRow key={category.id} category={category} />
      ))}
    </Table.Body>
  );
};
