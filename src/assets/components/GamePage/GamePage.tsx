import Header from "../Header/header";
import Carousel from "../HomePage/Carousel";
import ErrorElement from "../ErrorElement";
import GameInfo from "./GameInfo";
import getPrice from "../../helpers/prices.ts";
import useFetch from "../../API/useFetch";
import { GameDetailsTypes, GameScreensTypes } from "../../API/dataTypes.ts";
import { addToCart } from "../../helpers/storage.ts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const GamePage = () => {
  const { id } = useParams();

  const [isLoadingDetails, gameDetails, isErrorDetails] =
    useFetch<GameDetailsTypes>(`games/${id}`);
  const [isLoadingScreens, gameScreens, isErrorScreens] =
    useFetch<GameScreensTypes>(`games/${id}/screenshots`);

  const price = getPrice(gameDetails.id);
  const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]");
  const [cartList, setCartList] = useState(cartLocalStorage);
  const [isAdded, setAdded] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <>
      {isLoadingDetails ? (
        <div className="loader"></div>
      ) : isErrorDetails ? (
        <ErrorElement />
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default GamePage;
