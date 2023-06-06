import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CountrieDetails from "./components/CountrieDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:cca2",
    element: <CountrieDetails />,
  },
]);

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
