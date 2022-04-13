import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

export default function CustomStyles() {
  return (
    <>
      <Checkbox sx={{ ...stylesLight, border: ".5rem solid pink" }} />

      <div>hello</div>
    </>
  );
}
