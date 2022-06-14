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
          {/* <FormControl fullWidth sx={{ m: 1 }} variant='standard'>
            <InputLabel htmlFor='search-by-name'>Search by name</InputLabel>
            <Input id='search-by-name' endAdornment={<Search />} />
          </FormControl> */}

          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor='search-by-name'>Search by name</InputLabel>
            <OutlinedInput id='search-by-name' endAdornment={<Search />} label='Search by name' />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
