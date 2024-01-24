import GameCard from "./GameCard";
import useFetch from "../../API/useFetch.ts";
import { useState } from "react";
import ErrorElement from "../ErrorElement.tsx";
import gameDataType from "./types.ts";

const GamesGrid = () => {
  const [category, setCategory] = useState("games");
  const [params, setParams] = useState({});
  const [isLoading, gameList, isError] = useFetch(category, params);

  console.log(gameList);
  return (
    <>
      {isLoading ? (
        <>
          <div className="loader"></div>
        </>
      ) : isError ? (
        <ErrorElement />
      ) : (
        <div className="games-grid-wrapper">
          {gameList.results.map((game: gameDataType) => {
            console.log(game);
            return (
              <>
                <GameCard
                  bgImg={game.background_image}
                  gameName={game.name}
                  id={game.id}
                />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GamesGrid;
