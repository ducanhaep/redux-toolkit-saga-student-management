import { PeopleAlt } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { StatisticItem } from "./components/StatisticItem";
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
  console.log({ loading, statistics, highestStudentList, lowestStudentList, rankingByCityList });
  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
  return (
    <>
      <Box>
        {/* Statistic Section */}
        <Grid container>
          <Grid xs={12} md={6} lg={4} xl={3}>
            <StatisticItem
              icon={<PeopleAlt fontSize='large' color='primary' />}
              label='male'
              value={statistics.maleCount}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
