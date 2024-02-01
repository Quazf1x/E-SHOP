import gameGenresTypes from "./data/types";
import { Link, useParams } from "react-router-dom";

const GenreButton = ({ id, name, apiString }: gameGenresTypes) => {
  const { genre } = useParams();

  return (
    <li id={id} className="genre-button-wrapper">
      <Link className="genre-button-link" to={`/games/${apiString}`}>
        <p className={apiString == genre ? "chosen-genre" : ""}>
          <span className="genre-arrow">&gt;</span>
          {name}
        </p>
      </Link>
    </li>
  );
};

export default GenreButton;
