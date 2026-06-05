import type { Route } from "./+types/login";
import { ClientPage } from "../pages/client/client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Client Page" },
    { name: "description", content: "This is the page for the user reservation" },
  ];
}

export default function Login() {
  return <ClientPage />;
}
