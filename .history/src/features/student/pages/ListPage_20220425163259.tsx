import { Box, Button, Pagination, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { StudentTable } from "../components/StudentTable";
import { selectStudentList, selectStudentPagination, studentActions } from "../studentSlice";

export function ListPage() {
  const studentList = useAppSelector(selectStudentList);
  const pagination = useAppSelector(selectStudentPagination);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      studentActions.fetchStudentList({
        _page: 1,
        _limit: 15,
      })
    );
  }, [dispatch]);

  const handlePageChange = (e: any, page: number) => {};
  return (
    <Box>
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

      {/* StudentTable */}
      <StudentTable studentList={studentList} />

      {/* Pagination */}
      <Box>
        <Pagination
        alignItems: "center"
          color='primary'
          count={Math.ceil(pagination._totalRows / pagination._limit)}
          page={pagination?._page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}
