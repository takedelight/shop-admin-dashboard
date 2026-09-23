import { Show } from "@/shared/ui";
import { FieldError } from "@heroui/react/field-error";
import { Label } from "@heroui/react/label";
import { NumberField } from "@heroui/react/number-field";
import { Controller, useFormContext } from "react-hook-form";

export const ProductPriceField = () => {
  const form = useFormContext();

  return (
    <Controller
      name="price"
      control={form.control}
      render={({ field, fieldState }) => (
        <NumberField
          className="w-full"
          minValue={0}
          step={0.01}
          formatOptions={{ maximumFractionDigits: 2 }}
          value={Number.isNaN(field.value) ? 0 : field.value}
          onChange={(value) => field.onChange(value)}
          isInvalid={fieldState.invalid}
        >
          <Label isRequired>Price</Label>
          <NumberField.Group>
            <NumberField.DecrementButton />
            <NumberField.Input className="w-full" />
            <NumberField.IncrementButton />
          </NumberField.Group>

          <Show when={!!fieldState.error}>
            <FieldError>{fieldState.error?.message}</FieldError>
          </Show>
        </NumberField>
      )}
    />
  );
};
