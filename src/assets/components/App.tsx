import HomePage from "./HomePage/HomePage.tsx";
import BrowsePage from "./BrowsePage/BrowsePage.tsx";
import GamePage from "./GamePage/GamePage.tsx";
import CheckoutPage from "./CheckoutPage/CheckoutPage.tsx";
import ErrorElement from "./ErrorElement.tsx";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:genre" element={<BrowsePage />} />
        <Route path="/games/game/:id" element={<GamePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorElement />} />
      </Routes>
    </AnimatePresence>
  );
};
export default App;
