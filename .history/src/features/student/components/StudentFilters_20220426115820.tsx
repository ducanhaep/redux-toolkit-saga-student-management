import { Search } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
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

export function StudentFilters({ filter, onSearchChange }: StudentFiltersProps) {
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
          <FormControl fullWidth sx={{ m: 1 }}>
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
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id='demo-controlled-open-select-label'>Age</InputLabel>
            <Select
              labelId='demo-controlled-open-select-label'
              id='demo-controlled-open-select'
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={age}
              label='Age'
              onChange={handleChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
