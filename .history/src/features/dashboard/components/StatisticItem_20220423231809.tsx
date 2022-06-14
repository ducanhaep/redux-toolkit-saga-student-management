import { ReactElement } from "react";

export interface StatisticItemProps {
  icon: ReactElement;
  label: string;
  value: string | number;
}

export function StatisticItem(props: StatisticItemProps) {
  return <div></div>;
}
