import { z } from "zod/v4";

export const categorySchema = z.object({
  id: z.uuid(),
  icon: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  isActive: z.boolean(),
  slug: z
    .string()
    .max(50)
    .optional(),
  createdAt: z.date(),
});

export type Category = z.infer<typeof categorySchema>;
