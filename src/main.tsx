import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./assets/components/HomePage/HomePage.tsx";
import BrowsePage from "./assets/components/BrowsePage/BrowsePage.tsx";

import "./assets/styles/index.css";
import "./assets/styles/header.css";
import "./assets/styles/homeBanner.css";
import "./assets/styles/lastSeenBanner.css";
import "./assets/styles/browseBanner.css";
import "./assets/styles/filterBar.css";
import "./assets/styles/genreBar.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "games",
    element: <BrowsePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
