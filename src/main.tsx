import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import Layout from "./components/layout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{ index: true, Component: App }],
  },
]);

const root = document.getElementById("root");
createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
