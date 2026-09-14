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
import { Link } from "react-router";
import { useRegister } from "../model/hooks/use-register";

export const RegisterForm = () => {
  const { form, onSubmit } = useRegister();

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

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <TextField isRequired type="password">
            <Label>Confirm Password</Label>
            <Input placeholder="Confirm your password" {...field} />
            <FieldError />
          </TextField>
        )}
      />

      <Button className="w-full" type="submit">
        Register
      </Button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};
