import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthLayout } from "../components/AuthLayout";
import { RootLayout } from "../components/RootLayout";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import "./index.css";
import { QueryProvider } from "./providers/query.provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>,
);
