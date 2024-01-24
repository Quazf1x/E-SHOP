import GameCard from "./GameCard";
import useFetch from "../../API/useFetch.ts";
import { useState } from "react";

type gameDataType = {
  [key: string]: string | null | number | boolean | object;
  background_image: string;
  name: string;
};

const GamesGrid = () => {
  const [category, setCategory] = useState("games");
  const [isLoading, gameList, isError] = useFetch(category);

  console.log(gameList);
  return (
    <>
      {isLoading ? (
        <>
          <div className="loader"></div>
        </>
      ) : (
        <div className="games-grid-wrapper">
          {gameList.results.map((game: gameDataType) => {
            console.log(game);
            return (
              <>
                <GameCard bgImg={game.background_image} gameName={game.name} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GamesGrid;
