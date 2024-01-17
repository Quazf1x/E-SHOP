import GameCard from "./GameCard";
import gamePropTypes from "../../API/dataTypes";

type gamesGridProps = {
  isLoading: boolean;
  gameList: gamePropTypes;
};

const loadDiv = <div className="loader"></div>;

const GamesGrid = ({ isLoading, gameList }: gamesGridProps) => {
  console.log(gameList);
  return (
    <div className="games-grid-wrapper">
      {!isLoading
        ? gameList.map((game) => {
            return (
              <>
                <GameCard />
              </>
            );
          })
        : loadDiv}
    </div>
  );
};

export default GamesGrid;
