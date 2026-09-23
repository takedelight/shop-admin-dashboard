"use client";

import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Controller } from "react-hook-form";
import { useLogin } from "../model/hooks/use-login";

export const LoginForm = () => {
  const { form, onSubmit } = useLogin();

  const { handleSubmit, control } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-96 bg-white p-4 rounded-xl flex-col gap-4"
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField isRequired type="email">
            <Label>Email</Label>
            <Input {...field} placeholder="john@example.com" />
            <FieldError />
          </TextField>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField isRequired minLength={8} name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" {...field} />
            <Description>Must be at least 6 characters</Description>
            <FieldError />
          </TextField>
        )}
      />

      <Button className="w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
