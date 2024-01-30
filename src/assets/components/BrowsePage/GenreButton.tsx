import gameGenresTypes from "./data/types";

const GenreButton = ({ id, name, isChecked }: gameGenresTypes) => {
  return (
    <label className="genre-button-label" htmlFor={id}>
      <input id={id} type="radio" name="genre-radio" checked={isChecked} />
      <p>
        <span className="genre-arrow">&gt;</span>
        {name}
      </p>
    </label>
  );
};

export default GenreButton;
