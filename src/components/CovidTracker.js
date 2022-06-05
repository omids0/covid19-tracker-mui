import React from "react";
import { Grid, Stack } from "@mui/material";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function CovidTracker({data}) {
  return (
    <Stack p={2} spacing={2}>
      <Grid container>
        <Grid item xs={12} sm={8} md={9}>
          <LeftSide data={data} />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <RightSide data={data} />
        </Grid>
      </Grid>
    </Stack>
  );
}
