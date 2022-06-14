import { makeStyles, Paper } from "@mui/material";
const useStyles = makeStyles((theme) => {
  root: {
  }
});
export default function LoginPage() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h1' component='h2'>
          h1. Heading
        </Typography>
        ;
      </Paper>
    </div>
  );
}
