import { TextField } from "@mui/material";
import * as React from "react";
import { Control, useController } from "react-hook-form";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function InputField({ name, control, label }: InputFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <TextField
      fullWidth
      margin='normal'
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      variant='outlined'
    />
  );
}
