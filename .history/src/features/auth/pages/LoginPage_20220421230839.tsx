import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { login, selectIsLogging } from "../authSlice";

const StyleWrapper = styled("div")({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

const StylePaper = styled(Paper)({
  padding: 24,
});
const StyleButton = styled(Button)({
  width: "100%",
});

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(selectIsLogging);
  console.log(isLogging);
  const handleLoginClick = () => {
    // real life get username and pwd from log in form
    dispatch(
      login({
        username: "",
        password: "",
      })
    );
  };
  return (
    <StyleWrapper>
      <StylePaper elevation={1}>
        <Typography variant='h5' component='h1'>
          Student Management
        </Typography>
        <Box mt={4}>
          <StyleButton variant='contained' color='primary' onClick={handleLoginClick}>
            {isLogging && <CircularProgress size={20} color='secondary' />}
            Fake Login
          </StyleButton>
        </Box>
      </StylePaper>
    </StyleWrapper>
  );
}
