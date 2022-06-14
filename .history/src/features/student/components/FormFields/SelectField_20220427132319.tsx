import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { Control, useController } from "react-hook-form";
import { FormHelperText } from "@mui/material";

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
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small' fullWidth>
      <InputLabel id='filterByCity'>Sort</InputLabel>
      <Select
        labelId='filterByCity'
        value={filter._sort ? `${filter._sort}.${filter._order}` : ""}
        label='Sort'
        onChange={handleSortChange}
      >
        <MenuItem value=''>
          <em>No sort</em>
        </MenuItem>
        <MenuItem value='name.asc'>Name ASC</MenuItem>
        <MenuItem value='name.desc'>Name DESC</MenuItem>
        <MenuItem value='mark.asc'>Mark ASC</MenuItem>
        <MenuItem value='mark.desc'>Mark DESC</MenuItem>
      </Select>
    </FormControl>
  );
}
