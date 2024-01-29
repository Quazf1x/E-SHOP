import GameCard from "./GameCard";
import useFetch from "../../API/useFetch.ts";
import ErrorElement from "../ErrorElement.tsx";
import gameDataType from "./types.ts";

const GamesGrid = ({ page }) => {
  const category: string = "games";
  const params: Record<string, string> = { page: page };
  const [isLoading, gameList, isError] = useFetch(category, params, page);

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
