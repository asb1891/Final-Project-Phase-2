import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Error from "./Error";
import About from "./About";
import Root from "./Root";
import AdoptionResources from "./AdoptionResources";

const router = createBrowserRouter([
  {
    // Render <Root> at [URL].
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    // Render these children in the root's outlet when...
    children: [
      {
        // ...the user visits [URL].
        path: "/",
        element: <App />,
        loader: async() => fetch("http://localhost:3000/Photos").then(response => response.json())
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/AdoptionResources",
        element: <AdoptionResources />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// Replacing <App> with <RouterProvider> injects our routes into index.html.
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);