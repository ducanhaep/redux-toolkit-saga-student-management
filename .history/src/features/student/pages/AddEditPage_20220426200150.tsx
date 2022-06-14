import { ChevronLeft } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export function AddEditPage() {
  return (
    <Box>
      <Link to='/admin/students'>
        <Typography variant='caption' sx={{ display: "flex", alignItems: "center" }}>
          <ChevronLeft />
        </Typography>
      </Link>
    </Box>
  );
}
