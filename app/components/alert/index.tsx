import { Alert, type AlertColor } from "@mui/material";

import { Snackbar } from "@mui/material";

export const AlertComponent = ({
    open,
    status,
    message,
    onClose,
  }: {
    open: boolean;
    status: AlertColor;
    message: string;
    onClose: () => void;
  }) => (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} severity={status} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );