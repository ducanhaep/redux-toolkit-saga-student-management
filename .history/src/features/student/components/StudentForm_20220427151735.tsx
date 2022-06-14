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
    name: yup
      .string()
      .required("Please enter name")
      .test("two-words", "Please enter at least two words", (value) => {
        if (!value) return true;
        const parts = value.split(" ") || [];
        return parts.filter((x) => !!x).length > 2;
      }),
    age: yup
      .number()
      .positive("Please enter a positive number.")
      .min(18, "Min is 18")
      .max(60, "Max is 60")
      .integer("Please enter a integer.")
      .required("Please enter age.")
      .typeError("Please enter a valid number"),
    mark: yup
      .number()
      .min(0, "Min is 0")
      .max(10, "Max is 10")
      .positive("Please enter a positive number.")
      .required("Please enter mark.")
      .typeError("Please enter a valid number"),
    gender: yup
      .string()
      .oneOf(["male", "female"], "Please select either male or female.")
      .required("Please select gender"),
    city: yup.string().required("Please select city."),
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
