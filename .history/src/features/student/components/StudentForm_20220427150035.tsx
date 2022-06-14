import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useAppSelector } from "app/hooks";
import { selectCityOptions } from "features/city/citySlice";
import { Student } from "models";
import { useForm } from "react-hook-form";
import { InputField, RadioGroupField, SelectField } from "./FormFields";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface StudentFormProps {
  initialValue?: Student;
  onSubmit?: (formValue: Student) => void;
}

const schema = yup
  .object({
    name: yup.string().required(),
    age: yup
      .number()
      .positive("Please enter a positive number")
      .integer("Please enter a integer")
      .required("Please enter age"),
    mark: yup.number().positive("Please enter a positive number").required("Please enter age"),
  })
  .required();

export function StudentForm({ initialValue, onSubmit }: StudentFormProps) {
  const cityOptions = useAppSelector(selectCityOptions);
  const { control, handleSubmit } = useForm<Student>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (formValue: Student) => {
    console.log("handle form submit", formValue);
  };

  return (
    <Box width={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name='name' control={control} label='Full Name' />
        <RadioGroupField
          name='gender'
          control={control}
          label='Gender'
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />
        <InputField name='age' control={control} label='Age' type='number' />
        <InputField name='mark' control={control} label='Mark' type='number' />
        <SelectField name='city' control={control} label='City' options={cityOptions} />
        <Box mt={3}>
          <Button variant='contained' color='primary' type='submit'>
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
}
