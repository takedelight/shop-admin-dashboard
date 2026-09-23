import { Button } from "@heroui/react/button";
import { FormProvider } from "react-hook-form";
import { useCreateProduct } from "../model/hooks/use-create-product";
import { ProductCategorySelectField } from "./ProductCategorySelectField";
import { ProductDescriptionField } from "./ProductDescriptionField";
import { ProductImagesField } from "./ProductImagesField";
import { ProductNameField } from "./ProductNameField";
import { ProductPriceField } from "./ProductPriceField";
import { ProductStockField } from "./ProductStockField";

export const NewProductPage = () => {
  const { form, onSubmit, isLoading } = useCreateProduct();
  const { handleSubmit, reset } = form;

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Add Product</h2>
        <p className="text-sm text-[#8B909A]">
          Fill in the product details. Creation is mocked — the result is saved
          to localStorage.
        </p>

        <FormProvider {...form}>
          <form
            id="create-product-form"
            className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Левая колонка: изображения */}
            <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4">
              <ProductImagesField />
            </div>

            {/* Правая колонка: все остальные поля */}
            <div className="flex flex-col gap-4">
              <ProductNameField />

              <ProductDescriptionField />

              <ProductPriceField />

              <ProductStockField />

              <ProductCategorySelectField />

              <div className="mt-2 flex justify-end gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  onPress={() => reset()}
                  isDisabled={isLoading}
                >
                  Reset
                </Button>
                <Button type="submit" isPending={isLoading}>
                  Create product
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
