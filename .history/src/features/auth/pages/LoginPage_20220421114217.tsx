import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useAppDispatch } from "app/hooks";
import { login } from "../authSlice";

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

export default function LoginPage() {
  const dispatch = useAppDispatch()

  const handleLoginClick = () => {

    // real life get username and pwd from log in form
    dispatch(login({
      username='',
      password='',
  })) }
  }
  return (
    <StyleWrapper>
      <StylePaper elevation={1}>
        <Typography variant='h5' component='h1'>
          Student Management
        </Typography>
        <Box mt={4}>
          <Button variant='contained' color='primary' onClick={handleLoginClick}>
            Fake Login
          </Button>
        </Box>
      </StylePaper>
    </StyleWrapper>
  );
}
