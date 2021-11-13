import * as React from "react";
import { useContext } from "react";

import { Container, Typography, Box, Grid, Button } from "@mui/material";

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
      container
      sx={{ bgcolor: "#dcf5f2", height: "100vh", py: 25 }}
      align="center"
    >
      <Container>
        {car.Modelo !== "" ? (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              {`Tabela Fipe: ${car?.Modelo} ${car?.AnoModelo}`}
            </Typography>
            <Box
              sx={{
                color: "#FFF",
                bgcolor: "#00a38c",
                maxWidth: "170px",
                borderRadius: 6,
              }}
              component="h2"
            >
              {car?.Valor}
            </Box>
            <Typography variant="subtitle1" component="h2">
              Este é o preço de compra do veículo
            </Typography>
          </>
        ) : (
          <Typography variant="h4" component="h1" gutterBottom>
            Nenhum veículo encontrado
          </Typography>
        )}
        <Button onClick={back} color="inherit">
          Voltar
        </Button>
      </Container>
    </Grid>
  );
}
