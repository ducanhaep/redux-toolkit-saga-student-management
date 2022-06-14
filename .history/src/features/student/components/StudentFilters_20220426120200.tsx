import { Search } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { City, ListParams } from "models";
import { ChangeEvent } from "react";

export interface StudentFiltersProps {
  filter: ListParams;
  cityList: City[];
  onChange?: (filter: ListParams) => void;
  onSearchChange?: (filter: ListParams) => void;
}

export function StudentFilters({
  filter,
  cityList,
  onChange,
  onSearchChange,
}: StudentFiltersProps) {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;
    const newFilter = {
      ...filter,
      name_like: e.target.value,
    };
    onSearchChange(newFilter);
  };
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth sx={{ m: 1 }} size='small'>
            <InputLabel htmlFor='search-by-name'>Search by name</InputLabel>
            <OutlinedInput
              id='search-by-name'
              endAdornment={<Search />}
              label='Search by name'
              onChange={handleSearchChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
            <InputLabel id='filterByCity'>Filter by city</InputLabel>
            <Select
              labelId='filterByCity'
              value={age}
              label='Filter by city'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>All</em>
              </MenuItem>
              {cityList.map((city) => (
                <MenuItem value={10}>Ten</MenuItem>
              ))}
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
