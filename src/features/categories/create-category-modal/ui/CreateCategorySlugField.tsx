import { Show } from "@/shared/ui";
import { FieldError, Input, Label, TextField } from "@heroui/react";
import { Controller, useFormContext } from "react-hook-form";

export const CreateCategorySlugField = () => {
  const form = useFormContext();

  return (
    <Controller
      name="slug"
      control={form.control}
      render={({ field, fieldState }) => (
        <TextField isInvalid={fieldState.invalid} className="w-full">
          <Label>Slug</Label>
          <Input placeholder="category-slug" {...field} />

          <Show when={!!fieldState.error}>
            <FieldError>{fieldState?.error?.message}</FieldError>
          </Show>
        </TextField>
      )}
    />
  );
};
