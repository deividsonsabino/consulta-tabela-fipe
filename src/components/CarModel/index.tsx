import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context";

import { SelectMUI } from "../Widgets/Select";

interface CarModel {
    codigo: string;
    nome: string;
  }

  
export function CarModel() {
    const { brand, setModel } = useContext(Context);
    const [models, setModels] = useState<CarModel[]>([]);

    const getModels = async () => {
        if (brand.codigo !== "") {
          await fetch(
            `${process.env.NEXT_PUBLIC_URL_API_FIPE}/marcas/${brand.codigo}/modelos`
          )
            .then((response) => response.json())
            .then((response) => setModels(response.modelos));
        }
      };
    
      useEffect(() => {
        getModels();
      }, [brand.codigo]);

    return (
        <SelectMUI
            title="Modelos"
            items={models}
            onChange={setModel}
        />
    )
}