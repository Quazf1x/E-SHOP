import React from "react";
import ReactDOM from "react-dom/client";
import App from "./assets/components/App.tsx";
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./assets/components/Providers/CartProvider.tsx";

import.meta.glob("./assets/styles/*.css", { eager: true });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
);
