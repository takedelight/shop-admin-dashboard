import { categorySchema } from "@/entity/сategory";
import type { z } from "zod/v4";

export const createCategorySchema = categorySchema.pick({
  slug: true,
  name: true,
  icon: true,
  isActive: true,
});

export type CategoryFormData = z.infer<typeof createCategorySchema>;
