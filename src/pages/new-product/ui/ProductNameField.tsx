import { Show } from "@/shared/ui";
import { FieldError } from "@heroui/react/field-error";
import { Input } from "@heroui/react/input";
import { Label } from "@heroui/react/label";
import { TextField } from "@heroui/react/textfield";
import { Controller, useFormContext } from "react-hook-form";

export const ProductNameField = () => {
  const form = useFormContext();

  return (
    <Controller
      name="name"
      control={form.control}
      render={({ field, fieldState }) => (
        <TextField isInvalid={fieldState.invalid} className="w-full">
          <Label isRequired>Name</Label>
          <Input placeholder="Product name" {...field} />

          <Show when={!!fieldState.error}>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Show>
        </TextField>
      )}
    />
  );
};
