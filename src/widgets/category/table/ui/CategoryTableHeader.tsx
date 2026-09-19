import { CATEGORIES_COLUMNS } from "@/features/categories/toggle-visible/model/consts/columns";
import { Table } from "@heroui/react";

export const CategoryTableHeader = () => {
  return (
    <Table.Header>
      {CATEGORIES_COLUMNS.map((column) => (
        <Table.Column key={column.title} className={column.className}>
          {column.title}
        </Table.Column>
      ))}
    </Table.Header>
  );
};
