import GameCard from "./GameCard";
import gameListTypes from "../../API/dataTypes";

type gamesGridProps = {
  isLoading: boolean;
  gameList: gameListTypes[];
};

const GamesGrid = ({ isLoading, gameList }: gamesGridProps) => {
  console.log(gameList);
  return (
    <div className="games-grid-wrapper">
      {isLoading ? (
        <>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </>
      ) : (
        gameList.map((game: object) => {
          return (
            <>
              <GameCard />
            </>
          );
        })
      )}
    </div>
  );
};

export default GamesGrid;
