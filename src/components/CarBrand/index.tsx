import React, {useState, useContext, useEffect} from "react";

import { SelectMUI } from "../Widgets/Select";
import { Context } from '../../context/'

interface Brand {
    codigo: string;
    nome: string;
}

export function CarBrand() {
    const { brand, setBrand } = useContext(Context);
    const [brands, setBrands] = useState<Brand[]>([]);

    const getBrands = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_URL_API_FIPE}/marcas`)
          .then((response) => response.json())
          .then((response) => setBrands(response));
    };

    useEffect(() => {
        getBrands();
      }, []);
    
    return (
        <SelectMUI
            title="Marca"
            items={brands}
            onChange={setBrand}
        />
    )
}