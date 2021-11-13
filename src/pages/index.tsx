import * as React from "react";

import { Typography, Box, Grid } from "@mui/material";

import { SearchCar } from "../components/SearchCar";

export default function Index() {
  return (
    <Grid
      sx={{ bgcolor: "#f9f6fc", height: "100vh" }}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Box sx={{ my: 2, mx: 0, textAlign:"center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Tabela Fipe
          </Typography>
          <Typography variant="h6" component="h2">
            Consulte o valor de um veículo de forma gratuita
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "#FFF", textAlign:"center" }}>
          <SearchCar />
        </Box>
      </Grid>
    </Grid>
  );
}
