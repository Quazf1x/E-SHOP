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
  const params = {
    //if genre is set to a specific one, add it as a parameter for API fetch
    ...(genre !== "all" && { genres: genre }),
    page: "1",
  };
  const [isLoading, gameList, isError] = useFetch(category, params, genre);

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
