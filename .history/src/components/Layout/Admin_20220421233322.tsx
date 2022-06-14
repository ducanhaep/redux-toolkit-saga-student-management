import { Box } from "@mui/material";
import * as React from "react";

export function AdminLayout() {
  return (
    // <Box
    //   sx={{
    //     display: "grid",
    //     gridTemplateRows: "auto 1fr",
    //     gridTemplateColumns: "300px 1fr",
    //     gap: 1,
    //     gridTemplateAreas: `"header header" "sidebar main`,
    //     minHeight: "100vh",
    //   }}
    // >
    //   <Box sx={{ gridArea: "header" }}>Header</Box>
    //   <Box sx={{ gridArea: "sidebar" }}>Sidebar</Box>
    //   <Box sx={{ gridArea: "main" }}>Main</Box>
    // </Box>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"header header header header"
  "main main . sidebar"
  "footer footer footer footer"`,
      }}
    >
      <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>Header</Box>
      <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>Main</Box>
      <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>Sidebar</Box>
      <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
    </Box>
  );
}
