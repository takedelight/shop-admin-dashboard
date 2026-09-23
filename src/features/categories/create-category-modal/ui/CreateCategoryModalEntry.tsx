import { Button, Modal } from "@heroui/react";
import { Plus } from "lucide-react";
import { FormProvider } from "react-hook-form";
import { useCreateCategory } from "../model/hooks/use-create-category";
import { CreateCategoryIconPicker } from "./CreateCategoryIconPicker";
import { CreateCategoryNameField } from "./CreateCategoryNameField";
import { CreateCategorySlugField } from "./CreateCategorySlugField";

export const CreateCategoryModalEntry = () => {
  const { form, onSubmit, isLoading, isOpen, setOpen } = useCreateCategory();

  const { handleSubmit } = form;

  return (
    <Modal isOpen={isOpen} onOpenChange={setOpen}>
      <Button variant="secondary">
        {" "}
        <Plus />
        Add Category
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Create Category</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <FormProvider {...form}>
                <form
                  id="create-category-form"
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <CreateCategoryIconPicker />

                  <CreateCategoryNameField />

                  <CreateCategorySlugField />
                </form>
              </FormProvider>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button
                type="submit"
                form="create-category-form"
                isPending={isLoading}
              >
                Create
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
