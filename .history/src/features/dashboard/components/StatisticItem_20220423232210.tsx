import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";

export interface StatisticItemProps {
  icon: ReactElement;
  label: string;
  value: string | number;
}

export function StatisticItem({ icon, label, value }: StatisticItemProps) {
  return (
    <Paper>
      <Box>{icon}</Box>
    </Paper>
  );
}
