import { Button, Popover } from "@heroui/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { APPLIANCE_ICONS } from "../model/const/const";
import { getIconByName } from "../model/helpers/get-icon-by-name";

export const CreateCategoryIconPicker = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const form = useFormContext();

  return (
    <Controller
      name="icon"
      control={form.control}
      render={({ field }) => {
        const SelectedIcon = field.value ? getIconByName(field.value) : null;

        return (
          <div className="flex flex-col items-center gap-2">
            <Popover isOpen={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <Popover.Trigger>
                <Button isIconOnly variant="secondary" className="size-16">
                  {SelectedIcon ? (
                    <SelectedIcon className="size-6 " />
                  ) : (
                    <Plus className="size-6 text-neutral-400" />
                  )}
                </Button>
              </Popover.Trigger>
              <Popover.Content className="w-48">
                <Popover.Dialog>
                  <div className="grid grid-cols-3 gap-1 mt-2">
                    {APPLIANCE_ICONS.map(({ name, icon: Icon }) => (
                      <Button
                        key={name}
                        isIconOnly
                        size="sm"
                        variant={field.value === name ? "primary" : "ghost"}
                        onClick={() => {
                          field.onChange(name);
                          setIsPopoverOpen(false);
                        }}
                        className="size-10"
                      >
                        <Icon className="size-4" />
                      </Button>
                    ))}
                  </div>
                </Popover.Dialog>
              </Popover.Content>
            </Popover>
          </div>
        );
      }}
    />
  );
};
