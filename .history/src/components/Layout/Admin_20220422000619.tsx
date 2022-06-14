import { Box } from "@mui/material";
import { Header, Sidebar } from "components/Common";
import * as React from "react";

export function AdminLayout() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "240px 1fr",

        gridTemplateAreas: `"header header" "sidebar main"`,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          gridArea: "header",
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          gridArea: "sidebar",
          borderRight: 1,
          borderColor: "primary.main",
        }}
      >
        <Sidebar />
      </Box>
      <Box sx={{ gridArea: "main", px: 24, py: 16 }}>Main</Box>
    </Box>
  );
}
