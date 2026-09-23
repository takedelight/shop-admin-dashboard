import { Show } from "@/shared/ui";
import { FieldError } from "@heroui/react/field-error";
import { Label } from "@heroui/react/label";
import { TextArea } from "@heroui/react/textarea";
import { TextField } from "@heroui/react/textfield";
import { Controller, useFormContext } from "react-hook-form";

export const ProductDescriptionField = () => {
  const form = useFormContext();

  return (
    <Controller
      name="description"
      control={form.control}
      render={({ field, fieldState }) => (
        <TextField isInvalid={fieldState.invalid} className="w-full">
          <Label>Description</Label>
          <TextArea
            rows={4}
            placeholder="Optional product description"
            {...field}
            value={field.value ?? ""}
          />

          <Show when={!!fieldState.error}>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Show>
        </TextField>
      )}
    />
  );
};
