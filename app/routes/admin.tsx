import type { Route } from "./+types/login";
import { AdminPage } from "../pages/admin/admin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin Dashboard" },
    { name: "description", content: "This is the page for the admin" },
  ];
}

export default function Login() {
  return <AdminPage />;
}
