import GameCard from "./GameCard";
import useFetch from "../../API/useFetch.ts";
import ErrorElement from "../ErrorElement.tsx";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

type gameDataType = {
  [key: string]: string | null | number | boolean | object;
  background_image: string;
  name: string;
  id: number;
};

const GamesGrid = () => {
  const { genre } = useParams();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const page = urlParams.get("page");
  const platforms = urlParams.get("platforms");
  const category: string = "games";

  const params = useMemo(() => {
    return {
      //if genre is set to a specific one, add it as a parameter for API fetch
      ...(genre !== "all" && { genres: genre }),
      ...(platforms != null && { platforms: platforms }),
      page: page,
    };
  }, [genre, platforms, page]);

  const [isLoading, gameList, isError] = useFetch(category, params);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [genre, page, platforms]);

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
