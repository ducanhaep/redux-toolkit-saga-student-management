import { Box } from "@mui/material";
import * as React from "react";

export function AdminLayout() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "300px 1fr",
        gap: 1,
        gridTemplateAreas: `"header header" "sidebar main"`,
        minHeight: "100vh",
      }}
    >
      <Box sx={{ gridArea: "header" }}>Header</Box>
      <Box sx={{ gridArea: "sidebar" }}>Sidebar</Box>
      <Box sx={{ gridArea: "main" }}>Main</Box>
    </Box>
  );
}
