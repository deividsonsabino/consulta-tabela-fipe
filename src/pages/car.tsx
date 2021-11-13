import * as React from "react";
import { useContext } from "react";

import { Typography, Box, Grid, Button } from "@mui/material";

import { Context } from "../context";

import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const { car, setBrand, setModel, setYear } = useContext(Context);

  const back = () => {
    setBrand({ codigo: "" });
    setModel({ codigo: "" });
    setYear({ codigo: "" });
    router.push("/");
  };

  return (
    <Grid
      sx={{ bgcolor: "#dcf5f2", height: "100vh", py: 25 }}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item sx={{ textAlign: "center" }}>
        {car.Modelo !== "" ? (
          <Grid >
            <Typography variant="h4" component="h1" gutterBottom>
              {`Tabela Fipe: ${car?.Modelo} ${car?.AnoModelo}`}
            </Typography>
            <Box
              sx={{
                color: "#FFF",
                bgcolor: "#00a38c",
                borderRadius: 6,
                py: 1,
                m: 2,
              }}
              component="h2"
            >
              {car?.Valor}
            </Box>
            <Typography variant="subtitle1" component="h2">
              Este é o preço de compra do veículo
            </Typography>
          </Grid>
        ) : (
          <Typography variant="h4" component="h1" gutterBottom>
            Nenhum veículo encontrado
          </Typography>
        )}
        <Button onClick={back} color="inherit">
          Voltar
        </Button>
      </Grid>
    </Grid>
  );
}
