import { Show } from "@/shared/ui";
import { FieldError, Input, Label, TextField } from "@heroui/react";
import { Controller, useFormContext } from "react-hook-form";

export const CreateCategoryNameField = () => {
  const form = useFormContext();

  return (
    <Controller
      name="name"
      control={form.control}
      render={({ field, fieldState }) => (
        <TextField isInvalid={fieldState.invalid} className="w-full">
          <Label isRequired>Name</Label>
          <Input
            placeholder="Category name"
            {...field}
            onChange={(e) => field.onChange(e.target.value)}
          />

          <Show when={!!fieldState.error}>
            <FieldError>{fieldState?.error?.message}</FieldError>
          </Show>
        </TextField>
      )}
    />
  );
};
