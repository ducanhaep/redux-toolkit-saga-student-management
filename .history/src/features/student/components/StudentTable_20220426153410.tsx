import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { City, Student } from "models";
import { useState } from "react";
import { capitalizeString, getMarkColor } from "ultis";

export interface StudentTableProps {
  studentList: Array<Student>;
  cityMap: {
    [key: string]: City;
  };
  onEdit?: (student: Student) => void;
  onRemove?: (student: Student) => void;
}

export function StudentTable({ studentList, cityMap, onEdit, onRemove }: StudentTableProps) {
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student>();

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (student: Student) => {
    setSelectedStudent(student);
    setOpen(true);
  };

  const handleRemoveConfirm = (student: Student) => {
    onRemove?.(student);
    setOpen(false);
  };
  return (
    <>
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
                  <Box color={getMarkColor(student.mark)} fontWeight='bold'>
                    {student.mark}
                  </Box>
                </TableCell>
                <TableCell>{cityMap[student.city]?.name}</TableCell>
                <TableCell align='right'>
                  <Button color='primary' onClick={() => onEdit?.(student)} sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button color='secondary' onClick={() => handleRemoveClick(student)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Remove dialog */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Remove a student?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure to remove student named "{selectedStudent?.name}"
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveConfirm} autoFocus color='error' variant='contained'>
            Remove
          </Button>
          <Button onClick={handleClose} variant='outlined'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
