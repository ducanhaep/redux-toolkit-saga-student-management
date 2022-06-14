import { Box } from "@mui/material";
import { Header, Sidebar } from "components/Common";
import { Dashboard } from "features/dashboard";
import { StudentFeature } from "features/student";
import { Route, Switch } from "react-router-dom";

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
      <Box sx={{ gridArea: "main", px: 3, py: 2 }}>
        <Switch>
          <Route path='/admin/dashboard'>
            <Dashboard />
          </Route>

          <Route path='/admin/students'>
            <StudentFeature />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
