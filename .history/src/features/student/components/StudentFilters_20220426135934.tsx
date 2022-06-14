import { Search } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Button,
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
      city: e.target.value || undefined,
      _page: 1,
    };
    onChange(newFilter);
  };
  const handleSortChange = (e: SelectChangeEvent<unknown>) => {
    if (!onChange) return;
    const value = e.target.value;
    const [_sort, _order] = (value as string).split(".");
    const newFilter: ListParams = {
      ...filter,
      _sort: _sort || undefined,
      _order: (_order as "asc" | "desc") || undefined,
    };
    onChange(newFilter);
  };

  const handleClearFilter = () => {
    if (!onChange) return;

    const newFilter: ListParams = {
      ...filter,
      _page: 1,
      _sort: undefined,
      _order: undefined,
      city: undefined,
      name_like: undefined,
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

        <Grid item xs={12} md={6} lg={2}>
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
        </Grid>

        <Grid item xs={12} md={6} lg={1}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size='small' fullWidth>
            <Button
              variant='outlined'
              color='primary'
              fullWidth
              onClick={handleClearFilter}
              size='small'
            >
              Clear
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
