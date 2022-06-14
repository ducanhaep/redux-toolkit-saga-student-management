import { Box, Button, Paper, Typography } from "@mui/material";
import { styled, ThemeProvider } from "@mui/system";

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
  return (
    <StyleWrapper>
      <StylePaper elevation={1}>
        <Typography variant='h5' component='h1'>
          Student Management
        </Typography>
        <Box mt={4}>
          <Button variant='contained' color='primary'>
            Fake Login
          </Button>
        </Box>
      </StylePaper>
    </StyleWrapper>
  );
}
