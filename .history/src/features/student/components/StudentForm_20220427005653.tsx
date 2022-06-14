import { Student } from "models";

export interface StudentFormProps {
  initialValue?: Student;
  onSubmit?: (formValue: Student) => void;
}

export function StudentForm({ initialValue, onSubmit }: StudentFormProps) {
  return <div></div>;
}
