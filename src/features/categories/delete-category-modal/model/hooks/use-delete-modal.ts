import { useState } from "react";

export const useDeleteCategoryModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = () => {
    setIsOpen((p) => !p);
  };

  return {
    isOpen,
    onOpenChange,
    setIsOpen,
  };
};
