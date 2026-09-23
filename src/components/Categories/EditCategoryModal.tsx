import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import { Pencil } from "lucide-react";
import { Controller } from "react-hook-form";
import {
  type CategoryFormData,
  useCategoryForm,
} from "../../pages/categories/model/hooks/use-category-form";
import type { Category } from "../../pages/categories/model/types";

interface EditCategoryModalProps {
  category: Category;
  categories: Category[];
  onSubmit: (data: CategoryFormData) => Promise<void>;
  isLoading?: boolean;
}

export const EditCategoryModal = ({
  category,
  categories,
  onSubmit,
  isLoading,
}: EditCategoryModalProps) => {
  const { form, handleNameChange, handleSubmit } = useCategoryForm({
    name: category.name,
    slug: category.slug,
    description: category.description,
    image: category.image ?? "",
    parentId: category.parentId ?? "",
  });

  const rootCategories = categories.filter(
    (c) => !c.parentId && c.id !== category.id
  );

  return (
    <Modal>
      <Button isIconOnly size="sm" variant="tertiary">
        <Pencil className="size-4" />
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Pencil className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Category</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <form
                id="edit-category-form"
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <TextField className="w-full">
                      <Label>Name</Label>
                      <Input
                        {...field}
                        placeholder="Category name"
                        onChange={(e) => handleNameChange(e.target.value)}
                      />
                      {fieldState.error && (
                        <FieldError>{fieldState.error.message}</FieldError>
                      )}
                    </TextField>
                  )}
                />
                <Controller
                  name="slug"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <TextField className="w-full">
                      <Label>Slug</Label>
                      <Input {...field} placeholder="category-slug" />
                      {fieldState.error && (
                        <FieldError>{fieldState.error.message}</FieldError>
                      )}
                    </TextField>
                  )}
                />
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <TextField className="w-full">
                      <Label>Description</Label>
                      <Input {...field} placeholder="Optional description" />
                    </TextField>
                  )}
                />
                <Controller
                  name="image"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <TextField className="w-full">
                      <Label>Image URL</Label>
                      <Input
                        {...field}
                        placeholder="https://example.com/image.jpg"
                      />
                      {fieldState.error && (
                        <FieldError>{fieldState.error.message}</FieldError>
                      )}
                    </TextField>
                  )}
                />
                <Controller
                  name="parentId"
                  control={form.control}
                  render={({ field }) => (
                    <TextField className="w-full">
                      <Label>Parent Category</Label>
                      <select
                        {...field}
                        className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm"
                      >
                        <option value="">None (Root Category)</option>
                        {rootCategories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </TextField>
                  )}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button
                type="submit"
                form="edit-category-form"
                isPending={isLoading}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
