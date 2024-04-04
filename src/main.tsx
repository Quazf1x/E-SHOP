import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./assets/components/HomePage/HomePage.tsx";
import BrowsePage from "./assets/components/BrowsePage/BrowsePage.tsx";
import ErrorElement from "./assets/components/ErrorElement.tsx";
import GamePage from "./assets/components/GamePage/GamePage.tsx";
import CheckoutPage from "./assets/components/CheckoutPage/CheckoutPage.tsx";

import "./assets/styles/index.css";
import "./assets/styles/header.css";
import "./assets/styles/homeBanner.css";
import "./assets/styles/lastSeenBanner.css";
import "./assets/styles/browseBanner.css";
import "./assets/styles/filterBar.css";
import "./assets/styles/genreBar.css";
import "./assets/styles/gamesGrid.css";
import "./assets/styles/error.css";
import "./assets/styles/gameBanner.css";
import "./assets/styles/carousel.css";
import "./assets/styles/checkoutBanner.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/games/:genre",
    element: <BrowsePage />,
  },
  {
    path: "/games/game/:id",
    element: <GamePage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
