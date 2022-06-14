import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Student } from "models";

export interface StudentTableProps {
  studentList: Array<Student>;
}

export function StudentTable({ studentList }: StudentTableProps) {
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
          {studentList.map((student, index) => (
            <TableRow key={student.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align='center'>{student.id}</TableCell>
              <TableCell align='left'>{student.name}</TableCell>
              <TableCell align='right'>{student.gender}</TableCell>
              <TableCell align='right'>{student.mark}</TableCell>
              <TableCell align='right'>{student.city}</TableCell>
              <TableCell align='right'>
                <Button color='primary' variant='contained'>
                  Edit
                </Button>
                <Button color='secondary' variant='outlined'>
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