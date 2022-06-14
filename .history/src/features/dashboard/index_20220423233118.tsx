import { PeopleAlt } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { StatisticItem } from "./components/StatisticItem";
import GirlIcon from "@mui/icons-material/Girl";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
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
  import AddReactionIcon from "@mui/icons-material/AddReaction";
  console.log({ loading, statistics, highestStudentList, lowestStudentList, rankingByCityList });
  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
  return (
    <>
      <Box>
        {/* Statistic Section */}
        <Grid container>
          <Grid xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<PeopleAlt fontSize='large' color='primary' />}
              label='male'
              value={statistics.maleCount}
            />
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<GirlIcon fontSize='large' color='primary' />}
              label='female'
              value={statistics.femaleCount}
            />
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<AutoAwesomeIcon fontSize='large' color='primary' />}
              label='mark >=8'
              value={statistics.highMarkCount}
            />
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<AddReactionIcon fontSize='large' color='primary' />}
              label='mark <=5'
              value={statistics.lowMarkCount}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
