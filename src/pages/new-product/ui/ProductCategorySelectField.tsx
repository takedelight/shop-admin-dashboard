import { ListBox } from "@heroui/react/list-box";
import { Label } from "@heroui/react/label";
import { Select } from "@heroui/react/select";
import { Controller, useFormContext } from "react-hook-form";
import { useCategoryOptions } from "../model/hooks/use-category-options";

export const ProductCategorySelectField = () => {
  const form = useFormContext();
  const { options, isLoading } = useCategoryOptions();

  return (
    <Controller
      name="categoryId"
      control={form.control}
      render={({ field }) => (
        <Select
          className="w-full"
          placeholder={isLoading ? "Loading categories..." : "No category"}
          isDisabled={isLoading}
          value={field.value ?? null}
          onChange={(value) =>
            field.onChange(value == null ? null : String(value))
          }
        >
          <Label>Category</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {options.map((option) => (
                <ListBox.Item
                  key={option.id}
                  id={option.id}
                  textValue={option.name}
                >
                  {option.name}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      )}
    />
  );
};
