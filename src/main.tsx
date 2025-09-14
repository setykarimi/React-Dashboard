import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);


const root = document.getElementById("root");
createRoot(root!).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
