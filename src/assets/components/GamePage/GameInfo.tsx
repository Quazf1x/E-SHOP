import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import GameTag from "./GameTag.tsx";
import {
  GameTagType,
  GameDeveloperType,
  GamePlatformsType,
} from "../../API/dataTypes.ts";

const GameInfo = ({ gameDetails }: GameDetails) => {
  const [isCollapsed, setCollapse] = useState(true);

  let releaseDate = "Not available";
  if (gameDetails.released != null)
    releaseDate = gameDetails.released.replaceAll("-", ".");

  const devNames = gameDetails.developers.map((dev) => dev.name).join(", ");
  const platforms = gameDetails.parent_platforms
    .map((platform) => platform.platform.name)
    .join(", ");

  const gameTags = gameDetails.tags.map((tag: GameTagType) => {
    return <GameTag key={tag.id} name={tag.name} />;
  });

  const onMoreClick = () => {
    setCollapse(!isCollapsed);
  };

  return (
    <div className="gamepage-infoblock game-slide-left">
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
    developers: GameDeveloperType[];
    parent_platforms: GamePlatformsType[];
    tags: GameTagType[];
  };
};

export default GameInfo;
