import Header from "../Header/Header.tsx";
import Carousel from "../HomePage/Carousel.tsx";
import ErrorElement from "../ErrorElement.tsx";
import GameInfo from "./GameInfo.tsx";
import getPrice from "../../helpers/prices.ts";
import useFetch from "../../API/useFetch.ts";
import { GameDetailsTypes, GameScreensTypes } from "../../API/dataTypes.ts";
import { addToCart } from "../../helpers/storage.ts";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Providers/CartProvider.tsx";
import { pageTransitionMotion } from "../../helpers/motionConstants.ts";
import { motion } from "framer-motion";

const GamePage = () => {
  const { id } = useParams();

  const [isLoadingDetails, gameDetails, isErrorDetails] =
    useFetch<GameDetailsTypes>(`games/${id}`);
  const [isLoadingScreens, gameScreens, isErrorScreens] =
    useFetch<GameScreensTypes>(`games/${id}/screenshots`);

  const price = getPrice(gameDetails.id);
  const { cartList, setCartList } = useContext(CartContext);
  const [isAdded, setAdded] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <>
      {isLoadingDetails ? (
        <div className="loader" style={{ minHeight: "100svh" }}></div>
      ) : isErrorDetails ? (
        <ErrorElement />
      ) : (
        <motion.div
          initial={pageTransitionMotion.initial}
          animate={pageTransitionMotion.animate}
          transition={pageTransitionMotion.transition}
          exit={pageTransitionMotion.exit}
        >
          <Header />
          <main className="game-banner">
            <h1 className="gamepage-header">{gameDetails.name}</h1>
            <GameInfo gameDetails={gameDetails} />
            <Carousel
              isLoading={isLoadingScreens}
              carouselData={gameScreens.results}
              isError={isErrorScreens}
              hasDots={true}
              link={false}
            />
            <div className="gamepage-price-wrapper">
              <p>Buy {gameDetails.name}</p>
              <button
                onClick={(e) =>
                  addToCart(
                    e,
                    gameDetails.name,
                    price,
                    cartList,
                    setCartList,
                    setAdded,
                  )
                }
                className={
                  isAdded
                    ? "gamepage-buy-btn gamepage-buy-btn-added"
                    : "gamepage-buy-btn"
                }
              >
                <span className="gamepage-price">{price}$</span>
                {isAdded ? "Added" : "Add to cart"}
              </button>
            </div>
          </main>
        </motion.div>
      )}
    </>
  );
};

export default GamePage;
