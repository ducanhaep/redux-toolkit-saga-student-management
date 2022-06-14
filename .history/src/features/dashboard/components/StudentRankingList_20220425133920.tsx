import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Student } from "models";

export interface StudentRankingListProps {
  studentList: Array<Student>;
}

export function StudentRankingList({ studentList }: StudentRankingListProps) {
  return (
    <TableContainer>
      <Table aria-label='simple table' size='xs'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>#</TableCell>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='right'>Mark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student, index) => (
            <TableRow key={student.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align='center'>{index + 1}</TableCell>
              <TableCell align='left'>{student.name}</TableCell>
              <TableCell align='right'>{student.mark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
