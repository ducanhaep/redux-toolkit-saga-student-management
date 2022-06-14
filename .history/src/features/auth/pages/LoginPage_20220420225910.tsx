import { Box, Button, Paper, Typography, ThemeProvider, createTheme } from "@mui/material";
import { styled } from "@mui/system";

const StylePaper = styled(
  Paper,
  {}
)({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

export default function LoginPage() {
  return (
    <div>
      <StylePaper>
        <Typography variant='h5' component='h1'>
          Student Management
        </Typography>
        <Box mt={4}>
          <Button variant='contained' color='primary'>
            {" "}
            Fake Login
          </Button>
        </Box>
      </StylePaper>
    </div>
  );
}
