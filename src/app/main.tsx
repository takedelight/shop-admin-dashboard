import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthLayout } from "../components/AuthLayout";
import { RootLayout } from "../components/RootLayout";
import { DashboardPage } from "../pages/dashboard";
import { CategoriesPage } from "../pages/categories";
import { LoginPage } from "../pages/login";
import { NewProductPage } from "../pages/new-product";
import "./index.css";
import { QueryProvider } from "./providers/query.provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="products">
              <Route path="new-product" element={<NewProductPage />} />
            </Route>
          </Route>

          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>,
);
