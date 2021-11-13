import { Button, Box } from "@mui/material";

import { CarBrand } from "./CarBrand";
import { CarModel } from "./CarModel";
import { CarYear } from "./CarYear";

export function SearchCar() {
  return (
    <Box sx={{ minWidth: 120, p: 5, boxShadow: 1, borderRadius:1}} >
      <CarBrand />
      <CarModel />
      <CarYear />
      <Button variant="contained" color="primary" disabled>
        Consultar Preço
      </Button>
    </Box>
  );
}
