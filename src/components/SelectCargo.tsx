import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Box,
} from "@mui/material";
import { Controller } from "react-hook-form";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import type { CargoOption } from "../types/form";

interface SelectCargoProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
}

const CARGOS: CargoOption[] = [
  "Sócio(a) / CEO / Proprietário(a)",
  "Diretor(a) de Vendas",
  "Diretor(a) de Marketing",
  "Diretor(a) Outras Áreas",
  "Gerente de Marketing",
  "Gerente de Vendas",
  "Coordenador(a)/Supervisor(a) de Marketing",
  "Coordenador(a)/Supervisor(a) de Vendas",
  "Analista/Assistente de Marketing",
  "Analista/Assistente de Vendas",
  "Vendedor(a) / Executivo(a) de Contas",
  "Estudante",
  "Outros Cargos",
];

export function SelectCargo<T extends FieldValues = FieldValues>({
  name,
  control,
  label,
}: SelectCargoProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <Typography
            variant="body1"
            id={`${name}-label`}
            sx={{
              mb: 1,
              fontWeight: 700,
              color: "#000000",
              fontSize: "16px",
            }}
          >
            {label}
          </Typography>
          <FormControl fullWidth error={!!error} variant="outlined">
            <Select
            size="small"
              {...field}
              value={field.value || ""}
              displayEmpty
              labelId={`${name}-label`}
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "12px",
                },
                "& .MuiSelect-select": {
                  color: field.value ? "#000000" : "#999999",
                },
                "& fieldset": {
                  borderColor: "#E0E0E0",
                  borderRadius: "12px",
                },
                "&:hover fieldset": {
                  borderColor: "#1976d2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                },
              }}
            >
              <MenuItem value="" disabled>
                Selecione
              </MenuItem>
              {CARGOS.map((cargo) => (
                <MenuItem key={cargo} value={cargo}>
                  {cargo}
                </MenuItem>
              ))}
            </Select>
            {error && (
              <FormHelperText id={`${name}-error`}>{error.message}</FormHelperText>
            )}
          </FormControl>
        </Box>
      )}
    />
  );
}

