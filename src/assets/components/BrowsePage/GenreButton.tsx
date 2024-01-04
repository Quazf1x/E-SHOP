type GenreButtonTypes = {
  id: string;
  genreName: string;
};

const GenreButton = ({ id, genreName }: GenreButtonTypes) => {
  return (
    <label className="genre-button-label" htmlFor={id}>
      <input id={id} type="radio" name="rad" />
      <p>
        <span className="genre-arrow">&gt;</span>
        {genreName}
      </p>
    </label>
  );
};

export default GenreButton;
