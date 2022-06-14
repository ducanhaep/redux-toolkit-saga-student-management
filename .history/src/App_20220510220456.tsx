import { NotFound, PrivateRoute } from "components/Common";
import { AdminLayout } from "components/Layout";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";

function App() {
  return (
    <>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>

        <PrivateRoute path='/admin'>
          <AdminLayout />
        </PrivateRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
