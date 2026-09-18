import { Button } from "@heroui/react/button";
import { Modal } from "@heroui/react/modal";
import { Trash2 } from "lucide-react";
import { useDeleteCategoryModal } from "../model/hooks/use-delete-modal";

interface DeleteCategoryModalProps {
  categoryId: string;
  categoryName: string;
}

export const DeleteCategoryModalEntry = ({
  categoryName,
}: DeleteCategoryModalProps) => {
  const { isOpen, onOpenChange } = useDeleteCategoryModal();

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Button isIconOnly size="sm" variant="danger-soft">
        <Trash2 className="size-4" />
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Delete Category</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                Are you sure you want to delete{" "}
                <span className="font-semibold">{categoryName}</span>? All
                subcategories will also be removed.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onOpenChange}>
                Cancel
              </Button>

              <Button variant="danger">Delete</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
