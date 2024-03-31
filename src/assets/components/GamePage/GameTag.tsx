import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type GameTagTypes = {
  name: string;
};

const GameTag = ({ name }: GameTagTypes) => {
  return (
    <span className="gamepage-tag">
      {name}
      <FontAwesomeIcon icon={faTag} />
    </span>
  );
};

export default GameTag;
