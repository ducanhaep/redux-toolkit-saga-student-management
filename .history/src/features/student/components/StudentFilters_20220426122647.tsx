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
  SelectChangeEvent,
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
    const newFilter: ListParams = {
      ...filter,
      name_like: e.target.value,
      _page: 1,
    };
    onSearchChange(newFilter);
  };

  const handleCityChange = (e: SelectChangeEvent<unknown>) => {
    if (!onChange) return;
    const newFilter: ListParams = {
      ...filter,
      city: e.target.value,
      _page: 1,
    };
    onChange(newFilter);
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
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small' fullWidth>
            <InputLabel id='filterByCity'>Filter by city</InputLabel>
            <Select
              labelId='filterByCity'
              value={filter.city || ""}
              label='Filter by city'
              onChange={handleCityChange}
            >
              <MenuItem value=''>
                <em>All</em>
              </MenuItem>
              {cityList.map((city) => (
                <MenuItem key={city.code} value={city.code}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
