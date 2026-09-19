import { EmptyState } from "@heroui/react";
import { Inbox } from "lucide-react";

export const CategoryTableEmptyState = () => {
  return (
    <EmptyState className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
      <Inbox className="size-6 text-muted" />
      <span className="text-sm text-muted">No results found</span>
    </EmptyState>
  );
};
