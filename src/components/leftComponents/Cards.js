import { Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function Cards() {
  return (
    <Stack my={2}>
      <Grid
        container
        spacing={1}
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              padding: ".5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Coronavirus Cases
            </Typography>
            <Typography variant="h6" color="#cc0000">
              +165.5K
            </Typography>
            <Typography variant="subtitle2">+14.8m Toltal</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              padding: ".5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Recovered
            </Typography>
            <Typography variant="h6" color="#00ff00">
              +165.5K
            </Typography>
            <Typography variant="subtitle2">+14.8m Toltal</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              padding: ".5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Deaths
            </Typography>
            <Typography variant="h6" color="#cc0000">
              +165.5K
            </Typography>
            <Typography variant="subtitle2">+14.8m Toltal</Typography>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
