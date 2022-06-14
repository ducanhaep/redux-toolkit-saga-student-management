import { Box, Button, LinearProgress, Pagination, Typography } from "@mui/material";
import studentApi from "api/studentApi";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectCityList, selectCityMap } from "features/city/citySlice";
import { ListParams, Student } from "models";
import { useEffect } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
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
  const match = useRouteMatch();
  const history = useHistory();
  const studentList = useAppSelector(selectStudentList);
  const pagination = useAppSelector(selectStudentPagination);
  const filter = useAppSelector(selectStudentFilter);
  const loading = useAppSelector(selectStudentLoading);
  const cityMap = useAppSelector(selectCityMap);
  const cityList = useAppSelector(selectCityList);
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

  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(studentActions.setFilterWitchDebounce(newFilter));
  };
  const handleFilterChange = (newFilter: ListParams) => {
    dispatch(studentActions.setFilter(newFilter));
  };

  const handleRemoveStudent = async (student: Student) => {
    try {
      await studentApi.remove(student?.id || "");

      // Refresh student list
      const newRefFilter = { ...filter };
      dispatch(studentActions.setFilter(newRefFilter));
    } catch (error) {
      // Toast Error
      console.log("failed to remove student", error);
    }
  };

  const handleEditStudent = async (student: Student) => {
    history.push(`${match.url}/${student.id}`);
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
        <Link to={`${match.url}/add`} style={{ textDecoration: "none" }}>
          <Button variant='contained' color='primary'>
            Add new student
          </Button>
        </Link>
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
        <StudentFilters
          filter={filter}
          cityList={cityList}
          onSearchChange={handleSearchChange}
          onChange={handleFilterChange}
        />
      </Box>

      <StudentTable
        studentList={studentList}
        cityMap={cityMap}
        onRemove={handleRemoveStudent}
        onEdit={handleEditStudent}
      />

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
