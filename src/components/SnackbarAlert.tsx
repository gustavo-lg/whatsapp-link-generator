import { Snackbar, Alert } from "@mui/material";
import type { AlertColor } from "@mui/material";

interface SnackbarAlertProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose: () => void;
}

export function SnackbarAlert({
  open,
  message,
  severity,
  onClose,
}: SnackbarAlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

