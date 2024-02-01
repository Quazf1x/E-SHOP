import GameCard from "./GameCard";
import useFetch from "../../API/useFetch.ts";
import ErrorElement from "../ErrorElement.tsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

type gameDataType = {
  [key: string]: string | null | number | boolean | object;
  background_image: string;
  name: string;
  id: number;
};

const GamesGrid = () => {
  const { genre } = useParams();

  const category: string = "games";
  const params: Record<string, string> = {
    genres: genre.toLowerCase(),
  };
  const [isLoading, gameList, isError] = useFetch(category, params, genre);
  console.log(gameList);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [genre]);

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
            return (
              <GameCard
                key={`gamecard-${game.id}`}
                bgImg={game.background_image}
                gameName={game.name}
                id={game.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default GamesGrid;
