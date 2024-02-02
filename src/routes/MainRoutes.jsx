import React from "react";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import { Card } from "@mui/material";
import AuthPage from "../pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import { ContactPage } from "@mui/icons-material";
import AddProduct from "../components/product/AddProduct";
import EditPage from "../pages/EditPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "/about", element: <AboutPage /> },
    { id: 4, link: "*", element: <NotFoundPage /> },
    { id: 5, link: "/cart", element: <Card /> },
    { id: 6, link: "/auth", element: <AuthPage /> },
    { id: 7, link: "/contacts", element: <ContactPage /> },
    { id: 8, link: "/addProduct", element: <AddProduct /> },
    { id: 9, link: "/edit/:id", element: <EditPage /> },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
