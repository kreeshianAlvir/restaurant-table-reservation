import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { AlertComponent } from "./components/alert";
import { RootModelProvider, useRootModel } from "./root-models";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function AppContent() {
  const { alert, setAlert } = useRootModel();

  return (
    <>
      <Outlet />
      <AlertComponent
        open={alert.open}
        status={alert.severity}
        message={alert.message}
        onClose={() => setAlert({ open: false, severity: "info", message: "" })}
      />
    </>
  );
}

export default function App() {
  return (
    <RootModelProvider>
      <AppContent />
    </RootModelProvider>
  );
}
