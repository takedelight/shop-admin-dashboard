import { Table } from "@heroui/react";
import { useCategoryTable } from "../model/hooks/use-category-table";
import { CategoryTableBody } from "./CategoryTableBody";
import { CategoryTableHeader } from "./CategoryTableHeader";
import { CategoryTablePagination } from "./CategoryTablePagination";

export const CategoryTableEntry = () => {
  const {
    categories,
    page,
    pages,
    handlePageChange,
    totalPages,
    handleRowsPerPageChange,
    rowsPerPage,
  } = useCategoryTable();

  return (
    <Table className="h-165">
      <Table.ScrollContainer>
        <Table.Content aria-label="Categories table">
          <CategoryTableHeader />

          <CategoryTableBody categories={categories} />
        </Table.Content>
      </Table.ScrollContainer>

      <Table.Footer className="mt-auto">
        <CategoryTablePagination
          categoriesLength={categories.length}
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          pages={pages}
          handleRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPage={rowsPerPage}
        />
      </Table.Footer>
    </Table>
  );
};
