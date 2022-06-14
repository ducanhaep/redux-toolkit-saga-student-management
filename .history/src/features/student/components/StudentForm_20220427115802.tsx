import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Student } from "models";
import { useForm } from "react-hook-form";
import { InputField } from "./FormFields";

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
    <Box width={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name='name' control={control} label='Full Name' />
        <InputField name='age' control={control} label='Age' type='number' />
        <InputField name='mark' control={control} label='Mark' type='number' />
        <InputField name='gender' control={control} label='Gender' />
        <InputField name='city' control={control} label='City' />

        <Box mt={3}>
          <Button variant='contained' color='primary' type='submit'>
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
