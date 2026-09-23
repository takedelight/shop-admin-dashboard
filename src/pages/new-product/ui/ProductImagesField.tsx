import { Button } from "@heroui/react/button";
import { Label } from "@heroui/react/label";
import { ImagePlus, Star, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

interface ImagePreview {
  key: string;
  url: string;
  name: string;
}

const EMPTY_KEYS: string[] = [];

export const ProductImagesField = () => {
  const form = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<ImagePreview[]>([]);
  const previewsCacheRef = useRef<ImagePreview[]>([]);

  const {
    field: { value: imageKeys },
  } = useController({
    name: "imageKeys",
    control: form.control,
  });

  // Стабильная ссылка, чтобы не ломать мемоизацию consumers
  const keys: string[] = imageKeys ?? EMPTY_KEYS;

  // Порядок превью — из порядка ключей в форме:
  // первый ключ = основная картинка, сброс формы чистит список без effect
  const orderedPreviews = keys
    .map((key) => previews.find((preview) => preview.key === key))
    .filter((preview): preview is ImagePreview => Boolean(preview));

  const [mainPreview, ...thumbnails] = orderedPreviews;

  // Отпускаем blob-URL при размонтировании
  useEffect(() => {
    return () => {
      previewsCacheRef.current.forEach((preview) =>
        URL.revokeObjectURL(preview.url)
      );
    };
  }, []);

  const updatePreviews = (next: ImagePreview[]) => {
    previewsCacheRef.current = next;
    setPreviews(next);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const added: ImagePreview[] = Array.from(files).map((file) => ({
      key: `mock-key-${crypto.randomUUID()}`,
      url: URL.createObjectURL(file),
      name: file.name,
    }));

    // Заодно убираем из состояния превью, чьи ключи уже исчезли из формы
    updatePreviews([...orderedPreviews, ...added]);

    form.setValue(
      "imageKeys",
      [...keys, ...added.map((preview) => preview.key)],
      { shouldDirty: true }
    );

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const removeImage = (key: string) => {
    const target = previews.find((preview) => preview.key === key);
    if (target) URL.revokeObjectURL(target.url);

    updatePreviews(previews.filter((preview) => preview.key !== key));
    form.setValue(
      "imageKeys",
      keys.filter((existing) => existing !== key),
      { shouldDirty: true }
    );
  };

  const makeMain = (key: string) => {
    if (key === keys[0]) return;

    form.setValue(
      "imageKeys",
      [key, ...keys.filter((existing) => existing !== key)],
      { shouldDirty: true }
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <Label>Images</Label>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(event) => handleFiles(event.target.files)}
      />

      <Button
        type="button"
        variant="secondary"
        className="w-fit"
        onPress={() => inputRef.current?.click()}
      >
        <ImagePlus className="size-4" />
        Choose images
      </Button>

      <p className="text-xs text-[#8B909A]">
        First image is the main one — hover a thumbnail and press the star to
        make it main. Upload is mocked, only mock-key-... strings are stored.
      </p>

      {mainPreview && (
        <div className="flex flex-col gap-3">
          {/* Основная картинка — большая сверху */}
          <div className="group/main relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <img
              src={mainPreview.url}
              alt={mainPreview.name}
              className="size-full object-cover"
            />
            <span className="absolute top-2 left-2 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white">
              <Star className="size-3 fill-current" />
              Main
            </span>
            {thumbnails.length > 0 && (
              <button
                type="button"
                aria-label={`Remove ${mainPreview.name}`}
                onClick={() => removeImage(mainPreview.key)}
                className="absolute top-2 right-2 rounded-md bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover/main:opacity-100"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* Остальные — миниатюрами ниже */}
          {thumbnails.length > 0 && (
            <ul className="flex flex-wrap gap-3">
              {thumbnails.map((preview) => (
                <li
                  key={preview.key}
                  className="group/thumb relative size-20 overflow-hidden rounded-lg border border-neutral-200"
                >
                  <img
                    src={preview.url}
                    alt={preview.name}
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-1 bg-black/50 opacity-0 transition-opacity group-hover/thumb:opacity-100">
                    <button
                      type="button"
                      title="Make main"
                      aria-label={`Make ${preview.name} the main image`}
                      onClick={() => makeMain(preview.key)}
                      className="rounded-md bg-white/20 p-1.5 text-white hover:bg-white/40"
                    >
                      <Star className="size-3.5" />
                    </button>
                    <button
                      type="button"
                      title="Remove"
                      aria-label={`Remove ${preview.name}`}
                      onClick={() => removeImage(preview.key)}
                      className="rounded-md bg-white/20 p-1.5 text-white hover:bg-white/40"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
