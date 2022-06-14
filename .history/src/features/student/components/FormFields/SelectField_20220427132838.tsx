import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Control, useController } from "react-hook-form";

export interface SelectOption {
  label?: string;
  value: string | number;
}
export interface SelectFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  disabled?: boolean;
  options: SelectOption[];
}

export function RadioGroupField({ name, control, label, disabled, options }: SelectFieldProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <FormControl sx={{ m: 1 }} size='small' fullWidth error={invalid}>
      <InputLabel id={`${name}_label`}>{label}</InputLabel>
      <Select
        labelId={`${name}_label`}
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
      >
        <MenuItem value=''>
          <em>No sort</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
