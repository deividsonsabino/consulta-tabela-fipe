import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context";

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
            `${process.env.NEXT_PUBLIC_URL_API_FIPE}/marcas/${brand.codigo}/modelos/${model.codigo}/anos`
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