import { ChevronLeft } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import studentApi from "api/studentApi";
import { Student } from "models";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { StudentForm } from "../components/StudentForm";

export function AddEditPage() {
  const history = useHistory();
  const { studentId } = useParams<{ studentId: string }>();
  const isEdit = Boolean(studentId);

  const [student, setStudent] = useState<Student>();

  useEffect(() => {
    if (!studentId) return;
    (async () => {
      try {
        const data: Student = await studentApi.getById(studentId);
        setStudent(data);
      } catch (error) {
        console.log("Failed to fetch student details", error);
      }
    })();
  }, [studentId]);

  const handleStudentFormSubmit = async (formValue: Student) => {
    if (isEdit) {
      await studentApi.update(formValue);
    } else {
      await studentApi.add(formValue);
    }

    history.push("./admin/students");
  };

  const initialValue: Student = {
    name: "",
    age: "",
    mark: "",
    gender: "male",
    city: "",
    ...student,
  } as Student;
  return (
    <Box>
      <Link to='/admin/students'>
        <Typography variant='caption' sx={{ display: "flex", alignItems: "center" }}>
          <ChevronLeft /> Back to student list
        </Typography>
      </Link>
      <Typography variant='h4'>{isEdit ? "Update student info" : "Add new student"}</Typography>
      {(!isEdit || Boolean(student)) && (
        <Box mt={3}>
          <StudentForm initialValue={initialValue} onSubmit={handleStudentFormSubmit} />
        </Box>
      )}
    </Box>
  );
}
