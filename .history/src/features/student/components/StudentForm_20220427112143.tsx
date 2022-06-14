import { Box } from "@mui/system";
import { Student } from "models";
import { useForm } from "react-hook-form";

export interface StudentFormProps {
  initialValue?: Student;
  onSubmit?: (formValue: Student) => void;
}

export function StudentForm({ initialValue, onSubmit }: StudentFormProps) {
  const { control, handleSubmit } = useForm<Student>({
    defaultValues: initialValue,
  });

  const handleFormSubmit = (formValue: Student) => {
    console.log("handle form submit", formValue);
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}></form>
    </Box>
  );
}
