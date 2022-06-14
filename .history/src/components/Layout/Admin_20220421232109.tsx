import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BoxContainer = styled(Box)({
  display: "grid",
  // gridTemplateRows: "auto 1",
  // gridTemplateColumns: "300px 1fr",
  // gridTemplateAreas: `'header header' 'sidebar main`,
  minHeight: "100vh",
});

const BoxHeader = styled(Box)({
  gridArea: "header",
});
const BoxSidebar = styled(Box)({
  gridArea: "sidebar",
});
const BoxMain = styled(Box)({
  gridArea: "main",
});
export function AdminLayout() {
  return (
    <BoxContainer>
      <BoxHeader>HEADER</BoxHeader>
      <BoxSidebar>SIDEBAR</BoxSidebar>
      <BoxMain>MAIN</BoxMain>
    </BoxContainer>
  );
}
