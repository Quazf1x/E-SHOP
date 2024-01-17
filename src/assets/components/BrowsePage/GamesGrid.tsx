import GameCard from "./GameCard";
import gamePropTypes from "../../API/dataTypes";

const GamesGrid = ({ gameList }: gamePropTypes) => {
  console.log(gameList);
  const games = gameList.map((game) => {
    return (
      <>
        <GameCard />
      </>
    );
  });
  return <div className="games-grid-wrapper">{games}</div>;
};

export default GamesGrid;
