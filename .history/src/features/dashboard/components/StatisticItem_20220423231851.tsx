import { Paper } from "@mui/material";
import { ReactElement } from "react";

export interface StatisticItemProps {
  icon: ReactElement;
  label: string;
  value: string | number;
}

export function StatisticItem({ icon, label, value }: StatisticItemProps) {
  return <Paper></Paper>;
}
