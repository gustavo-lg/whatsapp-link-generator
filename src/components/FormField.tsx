import { TextField, Typography, Box } from "@mui/material";
import type { TextFieldProps } from "@mui/material";
import { Controller } from "react-hook-form";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

interface FormFieldProps<T extends FieldValues = FieldValues> extends Omit<TextFieldProps, "name" | "onChange" | "label"> {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormField<T extends FieldValues = FieldValues>({
  name,
  control,
  label,
  onChange,
  ...props
}: FormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box>
          <Typography
            variant="body1"
            sx={{
              mb: 1,
              fontWeight: 700,
              color: "#000000",
              fontSize: "16px",
            }}
          >
            {label}
          </Typography>
          <TextField
            {...field}
            {...props}
            fullWidth
            error={!!error}
            helperText={error?.message}
            variant="outlined"
            aria-label={label}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
              },
              ...props.sx,
            }}
            onChange={(e) => {
              if (onChange) {
                onChange(e as React.ChangeEvent<HTMLInputElement>);
              } else {
                field.onChange(e);
              }
            }}
          />
        </Box>
      )}
    />
  );
}

