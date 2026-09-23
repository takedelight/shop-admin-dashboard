import { CACHE_KEYS } from "@/shared/const";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@heroui/react/toast";
import { useForm } from "react-hook-form";
import { mockCreateProduct } from "../api/mock-create-product";
import { DEFAULT_PRODUCT_FORM_VALUES } from "../product-form-defaults";
import {
  createProductSchema,
  type ProductFormData,
} from "../schemas/create-product.schema";

export const useCreateProduct = () => {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(createProductSchema),
    defaultValues: DEFAULT_PRODUCT_FORM_VALUES,
  });

  const createProductMutation = useMutation({
    mutationKey: [CACHE_KEYS.CREATE_PRODUCT],
    mutationFn: mockCreateProduct,
    onSuccess: (product) => {
      form.reset(DEFAULT_PRODUCT_FORM_VALUES);
      toast.success("Product created", {
        description: `"${product.name}" has been saved (mock, check localStorage)`,
      });
    },
    onError: (error) => {
      toast.danger("Failed to create product", {
        description: error.message,
      });
    },
  });

  return {
    form,
    onSubmit: (data: ProductFormData) =>
      createProductMutation.mutateAsync(data),
    isLoading: createProductMutation.isPending,
  };
};
