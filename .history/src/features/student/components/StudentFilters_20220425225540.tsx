import { Grid } from "@mui/material";
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
            <InputLabel htmlFor='standard-adornment-amount'>Amount</InputLabel>
            <Input
              id='standard-adornment-amount'
              value={values.amount}
              onChange={handleChange("amount")}
              startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
