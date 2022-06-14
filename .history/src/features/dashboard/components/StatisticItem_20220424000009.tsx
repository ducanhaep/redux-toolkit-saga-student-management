import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";

export interface StatisticItemProps {
  icon: ReactElement;
  label: string;
  value: string | number;
}

export function StatisticItem({ icon, label, value }: StatisticItemProps) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Box sx={{}}>{icon}</Box>
      <Box>
        <Typography variant='h5' align='right'>
          {value}
        </Typography>
        <Typography variant='h5'>{label}</Typography>
      </Box>
    </Paper>
  );
}
