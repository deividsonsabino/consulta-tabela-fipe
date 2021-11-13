import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context";

import {api} from "../../utils"

import { SelectMUI } from "../Widgets/Select";

interface CarYear {
    codigo: string;
    nome: string;
  }

  
export function CarYear() {
    const { brand, model, setYear } = useContext(Context);
    const [years, setYears] = useState<CarYear[]>([]);

    const getYears = async () => {
        if (model.codigo !== "") {
          await fetch(
            `${api}/marcas/${brand.codigo}/modelos/${model.codigo}/anos`
          )
            .then((response) => response.json())
            .then((response) => setYears(response));
        }
    };
    
    useEffect(() => {
        getYears();
      }, [model.codigo]);

    return (
        <SelectMUI
            title="Ano"
            items={years}
            onChange={setYear}
        />
    )
}