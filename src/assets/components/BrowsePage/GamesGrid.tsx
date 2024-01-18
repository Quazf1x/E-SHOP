import GameCard from "./GameCard";
import gameListTypes from "../../API/dataTypes";

type gamesGridProps = {
  isLoading: boolean;
  gameList: gameListTypes[];
};

const GamesGrid = ({ isLoading, gameList }: gamesGridProps) => {
  console.log(gameList);
  return (
    <>
      {isLoading ? (
        <>
          <div className="loader"></div>
        </>
      ) : (
        <div className="games-grid-wrapper">
          {gameList.map((game: object) => {
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
