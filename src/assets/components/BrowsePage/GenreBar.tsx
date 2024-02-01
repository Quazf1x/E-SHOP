import GenreButton from "./GenreButton.tsx";
import gameGenres from "./data/gameGenresData.ts";

const GenreBar = () => {
  const gameGenresButtons = gameGenres.map((gameGenre) => {
    return (
      <GenreButton
        key={`genre-button-${gameGenre.id}`}
        id={gameGenre.id}
        name={gameGenre.name}
        isChecked={gameGenre.isChecked}
      />
    );
  });

  return (
    <div className="genre-bar-wrapper">
      <h3 id="genre-heading" className="browse-heading">
        Genre
      </h3>
      <ul>{gameGenresButtons}</ul>
    </div>
  );
};

export default GenreBar;
