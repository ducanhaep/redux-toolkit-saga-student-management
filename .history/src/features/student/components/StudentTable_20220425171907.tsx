import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { Student } from "models";
import { capitalizeString, getMarkColor } from "ultis";

export interface StudentTableProps {
  studentList: Array<Student>;
  onEdit?: (student: Student) => void;
  onRemove?: (student: Student) => void;
}

export function StudentTable({ studentList, onEdit, onRemove }: StudentTableProps) {
  return (
    <TableContainer>
      <Table aria-label='simple table' size='small'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>City</TableCell>
            <TableCell align='right'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student) => (
            <TableRow key={student.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{capitalizeString(student.gender)}</TableCell>
              <TableCell>
                <Box color={getMarkColor(student.mark)}>{student.mark}</Box>
              </TableCell>
              <TableCell>{student.city}</TableCell>
              <TableCell align='right'>
                <Button color='primary' onClick={() => onEdit?.(student)} sx={{ mr: 1 }}>
                  Edit
                </Button>
                <Button color='secondary' onClick={() => onRemove?.(student)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
