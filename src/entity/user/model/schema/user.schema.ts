import { z } from "zod/v4";

export const userSchema = z.object({
  id: z.uuid(),
  email: z.email(),
  username: z.string().min(3).max(20),
  avatarUrl: z.url().nullable(),
});

export type User = z.infer<typeof userSchema>;
