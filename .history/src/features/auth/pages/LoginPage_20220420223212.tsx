import { makeStyles, Paper, Typography } from "@mui/material";
const useStyles = makeStyles((theme) => {
  root: {
  }
});
export default function LoginPage() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h1'>
          Student Management
        </Typography>
        ;
      </Paper>
    </div>
  );
}
