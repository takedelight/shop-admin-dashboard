import { z } from "zod/v4";

export const createProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(200, "Name must be at most 200 characters"),
  description: z
    .string()
    .trim()
    .max(2000, "Description must be at most 2000 characters")
    .nullish(),
  price: z.number("Price is required").min(0, "Price cannot be negative"),
  imageKeys: z.array(z.string()).optional(),
  inStock: z.boolean().optional(),
  stockQuantity: z
    .number("Stock quantity is required")
    .int("Stock quantity must be an integer")
    .min(0, "Stock quantity cannot be negative"),
  categoryId: z.string().nullish(),
});

export type ProductFormData = z.infer<typeof createProductSchema>;
