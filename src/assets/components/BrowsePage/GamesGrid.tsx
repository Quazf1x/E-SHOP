import GameCard from "./GameCard.tsx";
import useFetch from "../../API/useFetch.ts";
import ErrorElement from "../ErrorElement.tsx";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useMemo, useContext } from "react";
import { CartContext } from "../Providers/CartProvider.tsx";
import { GameListTypes } from "../../API/dataTypes.ts";
import { gamesGridVariants } from "../../helpers/motionConstants.ts";
import { motion } from "framer-motion";

const GamesGrid = () => {
  const { genre } = useParams();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const { cartList } = useContext(CartContext);

  const page = urlParams.get("page");
  const platforms = urlParams.get("platforms");
  const searchSlug = urlParams.get("search");
  const order = urlParams.get("order");
  const category: string = "games";

  const params = useMemo(() => {
    return {
      //if genre is set to a specific one, add it as a parameter for API fetch
      ...(genre !== "all" && { genres: genre }),
      ...(platforms != null && { platforms: platforms }),
      ...(searchSlug != null && { search: searchSlug }),
      ...(order != null && { ordering: order }),
      page: page,
    };
  }, [genre, platforms, page, searchSlug, order]);

  const [isLoading, gameList, isError] = useFetch<GameListTypes>(
    category,
    params,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [genre, page, platforms]);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <>
      {isLoading ? (
        <div className="loader"></div>
      ) : isError ? (
        <ErrorElement />
      ) : (
        <motion.div
          variants={gamesGridVariants}
          initial="hidden"
          animate="show"
          className="games-grid-wrapper"
        >
          {gameList.results.map((game) => {
            return (
              <GameCard
                key={`gamecard-${game.id}`}
                bgImg={game.background_image}
                gameName={game.name}
                id={game.id}
              />
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default GamesGrid;
