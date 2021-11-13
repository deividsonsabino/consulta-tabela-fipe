import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { SearchCar } from "../components/SearchCar";

export default function Index() {
  return (
    <Grid sx={{ bgcolor: "#f9f6fc", height: "100vh", py:20 }} align="center">
      <Container>
        <Box sx={{ my: 0, mx: 0 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Tabela Fipe
          </Typography>
          <Typography variant="h6" component="h2">
            Consulte o valor de um veículo de forma gratuita
          </Typography>
        </Box>
        <Box maxWidth="sm" sx={{bgcolor:"#FFF"}}>
          <SearchCar />
        </Box>
      </Container>
    </Grid>
  );
}
