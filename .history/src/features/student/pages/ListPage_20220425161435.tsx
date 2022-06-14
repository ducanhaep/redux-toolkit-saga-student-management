import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { StudentTable } from "../components/StudentTable";
import { selectStudentList, studentActions } from "../studentSlice";

export function ListPage() {
  const studentList = useAppSelector(selectStudentList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      studentActions.fetchStudentList({
        _page: 1,
        _limit: 15,
      })
    );
  }, [dispatch]);
  return (
    <Box mb={4}>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant='h4'>Students</Typography>
        <Button variant='contained' color='primary'>
          Add new student
        </Button>
      </Box>

      {/* StudentTable */}
      <StudentTable studentList={studentList} />
    </Box>
  );
}
