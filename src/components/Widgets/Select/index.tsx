import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
interface ItemProps {
  title: string;
  items: Array<{
    codigo: string;
    nome: string;
  }>;
  onChange: any;
}

export function SelectMUI(props: ItemProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    props.onChange({ codigo: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 120, m: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {props.items.map((item) => (
            <MenuItem key={item.codigo} value={item.codigo}>
              {item.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
