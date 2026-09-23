import type { ProductFormData } from "../schemas/create-product.schema";

const MOCK_PRODUCTS_STORAGE_KEY = "mock_products";

export interface MockProduct {
  id: string;
  name: string;
  description: string | null;
  price: number;
  imageKeys: string[];
  inStock: boolean;
  stockQuantity: number;
  categoryId: string | null;
  createdAt: string;
}

const readMockProducts = (): MockProduct[] => {
  try {
    const raw = window.localStorage.getItem(MOCK_PRODUCTS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as MockProduct[]) : [];
  } catch {
    return [];
  }
};

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const mockCreateProduct = async (
  data: ProductFormData
): Promise<MockProduct> => {
  await sleep(800);

  const product: MockProduct = {
    id: crypto.randomUUID(),
    name: data.name,
    description: data.description ?? null,
    price: data.price,
    imageKeys: data.imageKeys ?? [],
    inStock: data.inStock ?? true,
    stockQuantity: data.stockQuantity,
    categoryId: data.categoryId ?? null,
    createdAt: new Date().toISOString(),
  };

  const products = [...readMockProducts(), product];
  window.localStorage.setItem(
    MOCK_PRODUCTS_STORAGE_KEY,
    JSON.stringify(products)
  );

  return product;
};
