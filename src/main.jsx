import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.jsx";
import Shop from "./pages/ShopPage/ShopPage.jsx";
import Contact from "./pages/ContactPage/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
    {
        path: "contact",
        element: <Contact />,
    },
    {
        path: "product/:id",
        element: <ProductPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
