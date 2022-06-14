import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistic,
  selectHighStudentList,
  selectLowStudentList,
  selectRankingsByCityList,
} from "./dashboardSlice";

export function Dashboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistic);
  const highestStudentList = useAppSelector(selectHighStudentList);
  const lowestStudentList = useAppSelector(selectLowStudentList);
  const rankingByCityList = useAppSelector(selectRankingsByCityList);
  console.log(loading, statistics, highestStudentList, lowestStudentList, rankingByCityList);
  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
  return <></>;
}
