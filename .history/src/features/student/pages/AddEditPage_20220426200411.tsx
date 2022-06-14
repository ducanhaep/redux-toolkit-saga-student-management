import { ChevronLeft } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useParams } from "react-router-dom";

export function AddEditPage() {
  const { studentId } = useParams<{ studentId: string }>();
  const isEdit = Boolean(studentId);
  return (
    <Box>
      <Link to='/admin/students'>
        <Typography variant='caption' sx={{ display: "flex", alignItems: "center" }}>
          <ChevronLeft /> Back to student list
        </Typography>
      </Link>

      <Typography variant='h4'>Add new student</Typography>
    </Box>
  );
}
