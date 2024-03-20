const GameInfo = ({ gameDetails }: GameDetails) => {
  console.log(gameDetails);
  const releaseDate = gameDetails.released.replaceAll("-", ".");
  const devNames = gameDetails.developers.map((dev) => dev.name + ", ");
  console.log(devNames);
  return (
    <div className="gamepage-infoblock">
      <p className="gamepage-description">{gameDetails.description_raw}</p>

      <div className="gamepage-details">
        <p>Released: {releaseDate}</p>
        <p>Developers: {devNames}</p>
        <button className="gamepage-more-btn">More</button>
      </div>
    </div>
  );
};

type GameDetails = {
  gameDetails: {
    description_raw: string;
    released: string;
    developers: GameDeveloper[];
  };
};

type GameDeveloper = {
  name: string;
};

export default GameInfo;
