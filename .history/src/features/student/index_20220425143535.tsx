import { Box } from "@mui/system";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AddEditPage } from "./pages/AddEditPage";
import { ListPage } from "./pages/ListPage";

export function StudentFeature() {
  const match = useRouteMatch();
  return (
    <Box>
      <Switch>
        <Route path={match.path} exact>
          <ListPage />
        </Route>
        <Route path={`${match.path}/add`}>
          <AddEditPage />
        </Route>
        <Route path={`${match.path}/:studentId`}>
          <AddEditPage />
        </Route>
      </Switch>
    </Box>
  );
}
