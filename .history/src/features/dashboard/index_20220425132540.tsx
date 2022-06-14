import { PeopleAlt } from "@mui/icons-material";
import { Box, Grid, LinearProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { StatisticItem } from "./components/StatisticItem";
import GirlIcon from "@mui/icons-material/Girl";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import {
  dashboardActions,
  selectDashboardLoading,
  selectDashboardStatistic,
  selectHighStudentList,
  selectLowStudentList,
  selectRankingsByCityList,
} from "./dashboardSlice";
import { Widget } from "./components/Widget";

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
      <Box
        sx={{
          position: "relative",
          paddingTop: "8px",
        }}
      >
        {/* Loading */}
        {loading && (
          <LinearProgress
            sx={{
              position: "absolute",
              top: "-8px",
              width: "100%",
            }}
          />
        )}
        {/* Statistic Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<PeopleAlt fontSize='large' color='primary' />}
              label='male'
              value={statistics.maleCount}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<GirlIcon fontSize='large' color='primary' />}
              label='female'
              value={statistics.femaleCount}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<AutoAwesomeIcon fontSize='large' color='primary' />}
              label='mark >=8'
              value={statistics.highMarkCount}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatisticItem
              icon={<AccessibilityIcon fontSize='large' color='primary' />}
              label='mark <=5'
              value={statistics.lowMarkCount}
            />
          </Grid>
        </Grid>

        {/* All students ranking */}
        <Box mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <Widget title='Student with highest mark'>
                <StudentRankingList />
              </Widget>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Widget title='Student with lowest mark'>Lowest</Widget>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
