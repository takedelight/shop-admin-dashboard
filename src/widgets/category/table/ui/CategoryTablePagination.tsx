import { ListBox, Pagination, Select } from "@heroui/react";

interface CategoryTablePaginationProps {
  page: number;
  totalPages: number;
  pages: number[];
  categoriesLength: number;
  handlePageChange: (newPage: number) => void;
  rowsPerPage: number;
  handleRowsPerPageChange: (newRowsPerPage: number) => void;
}

const ROWS_PER_PAGE_OPTIONS = [10, 20, 50];

export const CategoryTablePagination = ({
  page,
  totalPages,
  pages,
  categoriesLength,
  handleRowsPerPageChange,
  rowsPerPage,
  handlePageChange,
}: CategoryTablePaginationProps) => {
  return (
    <Pagination size="md">
      <Pagination.Summary>
        <Select>
          <Select.Trigger>
            <Select.Value>{rowsPerPage}</Select.Value>
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {ROWS_PER_PAGE_OPTIONS.map((option) => (
                <ListBox.Item
                  key={option}
                  onClick={() => handleRowsPerPageChange(option)}
                  value={option.toString()}
                >
                  {option}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
        of {categoriesLength} results
      </Pagination.Summary>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous
            isDisabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            <Pagination.PreviousIcon />
            Prev
          </Pagination.Previous>
        </Pagination.Item>
        {pages.map((p) => (
          <Pagination.Item key={p}>
            <Pagination.Link
              onClick={() => handlePageChange(p)}
              isActive={p === page}
            >
              {p}
            </Pagination.Link>
          </Pagination.Item>
        ))}
        <Pagination.Item>
          <Pagination.Next
            onClick={() => handlePageChange(page + 1)}
            isDisabled={page === totalPages}
          >
            Next
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
};
