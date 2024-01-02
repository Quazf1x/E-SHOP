import GenreButton from "./GenreButton.tsx";

const GenreBar = () => {
  return (
    <div className="genre-bar-wrapper">
      <h3 id="genre-heading" className="browse-heading">
        Genre
      </h3>
      <GenreButton id="1" genreName="Action" />
      <GenreButton id="2" genreName="Strategy" />
      <GenreButton id="3" genreName="Rpg" />
    </div>
  );
};

export default GenreBar;
