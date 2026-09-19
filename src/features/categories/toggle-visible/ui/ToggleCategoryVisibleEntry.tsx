import { Switch, Tooltip } from "@heroui/react";

interface ToggleCategoryVisibleEntryProps {
  isActive: boolean;
}

export const ToggleCategoryVisibleEntry = ({
  isActive,
}: ToggleCategoryVisibleEntryProps) => {
  return (
    <Tooltip delay={0}>
      <Switch isSelected={isActive} aria-label="Видимость категории">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch>
      <Tooltip.Content>
        {isActive ? "Скрыть из каталога" : "Показать в каталоге"}
      </Tooltip.Content>
    </Tooltip>
  );
};
