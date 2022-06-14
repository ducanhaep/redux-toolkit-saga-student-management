import { Search } from "@mui/icons-material";
import { FormControl, Grid, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { City, ListParams } from "models";

export interface StudentFiltersProps {
  filter: ListParams;
  cityList: City[];
  onChange?: (filter: ListParams) => void;
  onSearchChange?: (filter: ListParams) => void;
}

export function StudentFilters(props: StudentFiltersProps) {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth sx={{ m: 1 }} variant='standard'>
            <InputLabel htmlFor='search-by-name'>Search by name</InputLabel>
            <Input id='search-by-name' endAdornment={<Search />} />
          </FormControl>

          <TextField
            label='Search by name'
            id='outlined-end-adornment'
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: <InputAdornment position='start'>kg</InputAdornment>,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
