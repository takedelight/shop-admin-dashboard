import type { Category } from "@/entity/сategory";
import { Chip, Table } from "@heroui/react";
import { CategoryActions } from "./CategoryActions";

interface CategoryRowProps {
  category: Category;
}

export const CategoryRow = ({ category }: CategoryRowProps) => {
  const rows = [
    <Table.Row key={category.id} id={category.id}>
      <Table.Cell>
        <span className="font-medium">{category.name}</span>
      </Table.Cell>
      <Table.Cell>
        <code className="text-xs text-neutral-500">{category.slug}</code>
      </Table.Cell>
      <Table.Cell>
        <Chip
          color={category.isActive ? "accent" : "danger"}
          size="sm"
          variant="soft"
        >
          {category.isActive ? "Active" : "Inactive"}
        </Chip>
      </Table.Cell>

      <Table.Cell>
        <span className="text-sm text-neutral-500">
          {Intl.DateTimeFormat().format(new Date(category.createdAt))}
        </span>
      </Table.Cell>
      <Table.Cell>
        <CategoryActions category={category} />
      </Table.Cell>
    </Table.Row>,
  ];

  return <>{rows}</>;
};
