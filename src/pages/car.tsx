import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Grid, Chip } from "@mui/material";

export default function Index() {
  return (
    <Grid sx={{ bgcolor: "#dcf5f2", height: "100vh" }} align="center">
      <Container>
        <Box sx={{ my: 0, mx: 0 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Tabela Fipe: Preço Chevrolet Cruze 2019
          </Typography>
          <Box sx={{color: "#FFF", bgcolor: "#00a38c", maxWidth:"170px", borderRadius:6}} component="h2">
            R$ 91.618
          </Box>
          <Typography variant="subtitle1" component="h2">
            Este é o preço de compra do veículo
          </Typography>
        </Box>
      </Container>
    </Grid>
  );
}
