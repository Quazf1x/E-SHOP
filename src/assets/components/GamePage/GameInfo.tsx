import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import GameTag from "./GameTag.tsx";

const GameInfo = ({ gameDetails }: GameDetails) => {
  const [isCollapsed, setCollapse] = useState(true);

  let releaseDate = "Not available";
  if (gameDetails.released != null)
    releaseDate = gameDetails.released.replaceAll("-", ".");

  const devNames = gameDetails.developers.map((dev) => dev.name).join(", ");
  const platforms = gameDetails.parent_platforms
    .map((platform) => platform.platform.name)
    .join(", ");

  const gameTags = gameDetails.tags.map((tag: GameTag) => {
    return <GameTag key={tag.id} name={tag.name} />;
  });

  const onMoreClick = () => {
    setCollapse(!isCollapsed);
  };

  return (
    <div className="gamepage-infoblock">
      <p className="gamepage-description">{gameDetails.description_raw}</p>

      <div
        className="gamepage-details"
        style={{ maxHeight: isCollapsed ? 0 : "100%" }}
      >
        <p>Released: {releaseDate}</p>
        <p>Developers: {devNames}</p>
        <p>Platforms: {platforms}</p>
        <div className="gamepage-tags-wrapper">{gameTags}</div>
      </div>
      <button onClick={onMoreClick} className="gamepage-more-btn">
        More <FontAwesomeIcon icon={faCaretDown} />
      </button>
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
