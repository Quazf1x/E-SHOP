import GameTag from "./GameTag.tsx";

const GameInfo = ({ gameDetails }: GameDetails) => {
  console.log(gameDetails);

  const releaseDate = gameDetails.released.replaceAll("-", ".");
  const devNames = gameDetails.developers.map((dev) => dev.name).join(", ");
  const platforms = gameDetails.parent_platforms
    .map((platform) => platform.platform.name)
    .join(", ");

  return (
    <div className="gamepage-infoblock">
      <p className="gamepage-description">{gameDetails.description_raw}</p>

      <div className="gamepage-details">
        <p>Released: {releaseDate}</p>
        <p>Developers: {devNames}</p>
        <p>Platforms: {platforms}</p>
        <GameTag name="RPG" />
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
    parent_platforms: GamePlatforms[];
  };
};

type GameDeveloper = {
  name: string;
};

type GamePlatforms = {
  platform: {
    name: string;
  };
};

export default GameInfo;
