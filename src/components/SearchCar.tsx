import { Context } from "../context";

import { useContext } from "react";

import { Button, Box } from "@mui/material";

import { CarBrand } from "./CarBrand";
import { CarModel } from "./CarModel";
import { CarYear } from "./CarYear";

import { useRouter } from "next/router";

import {api} from "../utils"

export function SearchCar() {
  const router = useRouter();

  const { year, brand, model, setCar } = useContext(Context);


  const handleSubmit = async () => {
    if (year.codigo !== "") {
      await fetch(
        `${api}/marcas/${brand.codigo}/modelos/${model.codigo}/anos/${year.codigo}`
      )
        .then((response) => response.json())
        .then((response) => setCar(response));
      router.push("/car");
    }
  }

  return (
    <Box sx={{ minWidth: 120, p: 5, boxShadow: 1, borderRadius: 1 }}>
      <CarBrand />
      <CarModel />
      {model.codigo !== "" && <CarYear />}

      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        disabled={model.codigo !== "" && year.codigo !== "" ? false : true}
      >
        Consultar Preço
      </Button>
    </Box>
  );
}
