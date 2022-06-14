import { useAppDispatch } from "app/hooks";
import { useEffect } from "react";
import { dashboardActions } from "./dashboardSlice";

export function Dashboard() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
  return <></>;
}
