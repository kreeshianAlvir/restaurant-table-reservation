import type { Route } from "./+types/login";
import { LoginPage } from "../pages/login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Admin" },
    { name: "description", content: "This is the login page for the admin!" },
  ];
}

export default function Login() {
  return <LoginPage />;
}
