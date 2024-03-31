import GameTag from "./GameTag.tsx";

const GameInfo = ({ gameDetails }: GameDetails) => {
  console.log(gameDetails);

  const releaseDate = gameDetails.released.replaceAll("-", ".");
  const devNames = gameDetails.developers.map((dev) => dev.name).join(", ");
  const platforms = gameDetails.parent_platforms
    .map((platform) => platform.platform.name)
    .join(", ");
  const gameTags = gameDetails.tags.map((tag: GameTag) => {
    return <GameTag key={tag.id} name={tag.name} />;
  });

  return (
    <div className="gamepage-infoblock">
      <p className="gamepage-description">{gameDetails.description_raw}</p>

      <div className="gamepage-details">
        <p>Released: {releaseDate}</p>
        <p>Developers: {devNames}</p>
        <p>Platforms: {platforms}</p>
        <div className="gamepage-tags-wrapper">{gameTags}</div>
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
    tags: GameTag[];
  };
};

type GameTag = {
  id: number;
  name: string;
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
