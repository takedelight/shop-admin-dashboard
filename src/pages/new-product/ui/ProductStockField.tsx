import { Show } from "@/shared/ui";
import { FieldError } from "@heroui/react/field-error";
import { Label } from "@heroui/react/label";
import { NumberField } from "@heroui/react/number-field";
import { Switch } from "@heroui/react/switch";
import { Controller, useFormContext } from "react-hook-form";

export const ProductStockField = () => {
  const form = useFormContext();

  return (
    <div className="flex items-end gap-6">
      <Controller
        name="stockQuantity"
        control={form.control}
        render={({ field, fieldState }) => (
          <NumberField
            className="w-full max-w-48"
            minValue={0}
            step={1}
            formatOptions={{ maximumFractionDigits: 0 }}
            value={Number.isNaN(field.value) ? 0 : field.value}
            onChange={(value) => field.onChange(value)}
            isInvalid={fieldState.invalid}
          >
            <Label isRequired>Stock quantity</Label>
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

      <Controller
        name="inStock"
        control={form.control}
        render={({ field }) => (
          <div className="pb-2">
            <Switch isSelected={field.value ?? false} onChange={field.onChange}>
              <Switch.Content>
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                Available for sale
              </Switch.Content>
            </Switch>
          </div>
        )}
      />
    </div>
  );
};
