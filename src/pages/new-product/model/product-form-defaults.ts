import type { ProductFormData } from "./schemas/create-product.schema";

export const DEFAULT_PRODUCT_FORM_VALUES: ProductFormData = {
  name: "",
  description: "",
  price: 0,
  imageKeys: [],
  inStock: true,
  stockQuantity: 0,
  categoryId: null,
};
