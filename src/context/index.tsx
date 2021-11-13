import React, { createContext, useState } from "react";

interface Type {
  codigo: string;
}

interface CarType {
  Valor: string;
  Modelo: string;
  AnoModelo: number;
}

interface PropsType {
  brand: Type;
  model: Type;
  year: Type;
  car: CarType;
  setBrand: React.Dispatch<React.SetStateAction<Type>>;
  setModel: React.Dispatch<React.SetStateAction<Type>>;
  setYear: React.Dispatch<React.SetStateAction<Type>>;
  setCar: React.Dispatch<React.SetStateAction<CarType>>;
}

const DEFAULT_VALUE = {
  brand: {
    codigo: "",
  },
  setBrand: () => {},
  model: {
    codigo: "",
  },
  setModel: () => {},
  year: {
    codigo: "",
  },
  setYear: () => { },
  car: {
    Valor: "",
    Modelo: "",
    AnoModelo: 0
  },
  setCar: () => {}
};

export const Context = createContext<PropsType>(DEFAULT_VALUE);

export const ContextProvider: React.FC = ({ children }) => {
  const [brand, setBrand] = useState(DEFAULT_VALUE.brand);
  const [model, setModel] = useState(DEFAULT_VALUE.model);
  const [year, setYear] = useState(DEFAULT_VALUE.year);
  const [car, setCar] = useState(DEFAULT_VALUE.car);

  return (
    <Context.Provider
      value={{
        brand,
        setBrand,
        model,
        setModel,
        year,
        setYear,
        car,
        setCar,
      }}
    >
      {children}
    </Context.Provider>
  );
};
