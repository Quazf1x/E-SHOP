type GenreButtonTypes = {
  id: string;
  genreName: string;
};

const GenreButton = ({ id, genreName }: GenreButtonTypes) => {
  return (
    <label className="genre-button-label" htmlFor={id}>
      <input id={id} type="radio" name="rad" />
      {genreName}
    </label>
  );
};

export default GenreButton;
