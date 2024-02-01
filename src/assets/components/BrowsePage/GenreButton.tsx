import gameGenresTypes from "./data/types";
import { Link } from "react-router-dom";

const GenreButton = ({ id, name, isChecked }: gameGenresTypes) => {
  return (
    <li id={id} className="genre-button-wrapper">
      <Link className="genre-button-link" to={`/games/${name}`}>
        <p>
          <span className="genre-arrow">&gt;</span>
          {name}
        </p>
      </Link>
    </li>
  );
};

export default GenreButton;
