import { Context } from "../context";
import { useContext } from "react";

import { Button, Box } from "@mui/material";
import { CarBrand } from "./CarBrand";
import { CarModel } from "./CarModel";
import { CarYear } from "./CarYear";

export function SearchCar() {
  const { year, brand, model, setCar } = useContext(Context);

  return (
    <Box sx={{ minWidth: 120, p: 5, boxShadow: 1, borderRadius: 1 }}>
      <CarBrand />
      <CarModel />
      {model.codigo !== "" && <CarYear />}

      <Button variant="contained" color="primary" disabled={year.codigo !== "" ? false : true}>
        Consultar Preço
      </Button>
    </Box>
  );
}
