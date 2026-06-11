import { createContext, useContext, useState, type ReactNode } from "react";
import { type AlertColor } from "@mui/material";
import type { AlertState } from "./assets/constants";

const RootModelContext = createContext<{
  alert: AlertState;
  setAlert: (alert: AlertState) => void;
} | null>(null);

export function RootModelProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState<AlertState>({
    open: false,
    message: "",
    severity: "info",
  });

  return (
    <RootModelContext.Provider value={{ alert, setAlert }}>
      {children}
    </RootModelContext.Provider>
  );
}

export const useRootModel = () => {
  const ctx = useContext(RootModelContext);
  if (!ctx) throw new Error("useRootModel must be used within RootModelProvider");
  return ctx;
};