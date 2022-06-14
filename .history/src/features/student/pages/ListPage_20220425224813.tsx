import { Box, Button, LinearProgress, Pagination, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectCityMap } from "features/city/citySlice";
import { useEffect } from "react";
import { StudentFilters } from "../components/StudentFilters";
import { StudentTable } from "../components/StudentTable";
import {
  selectStudentFilter,
  selectStudentList,
  selectStudentLoading,
  selectStudentPagination,
  studentActions,
} from "../studentSlice";

export function ListPage() {
  const studentList = useAppSelector(selectStudentList);
  const pagination = useAppSelector(selectStudentPagination);
  const filter = useAppSelector(selectStudentFilter);
  const loading = useAppSelector(selectStudentLoading);
  const cityMap = useAppSelector(selectCityMap);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(studentActions.fetchStudentList(filter));
  }, [dispatch, filter]);

  const handlePageChange = (e: any, page: number) => {
    dispatch(
      studentActions.setFilter({
        ...filter,
        _page: page,
      })
    );
  };
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant='h4'>Students</Typography>
        <Button variant='contained' color='primary'>
          Add new student
        </Button>
      </Box>

      {loading && (
        <LinearProgress
          sx={{
            position: "absolute",
            top: "-8px",
            width: "100%",
          }}
        />
      )}

      <Box mb={4}>
        <StudentFilters />
      </Box>

      <StudentTable studentList={studentList} cityMap={cityMap} />

      <Box>
        <Pagination
          color='primary'
          count={Math.ceil(pagination._totalRows / pagination._limit)}
          page={pagination?._page}
          onChange={handlePageChange}
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Box>
    </Box>
  );
}
