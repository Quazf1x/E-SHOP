import GenreButton from "./GenreButton.tsx";

const GenreBar = () => {
  return (
    <div className="genre-bar-wrapper">
      <h3 id="genre-heading" className="browse-heading">
        Genre
      </h3>
      <GenreButton id="Action-Genre" genreName="Action" />
      <GenreButton id="Indie-Genre" genreName="Indie" />
      <GenreButton id="Rpg-Genre" genreName="Rpg" />
      <GenreButton id="Strategy-Genre" genreName="Strategy" />
      <GenreButton id="Shooter-Genre" genreName="Shooter" />
      <GenreButton id="Casual-Genre" genreName="Casual" />
      <GenreButton id="Simulation-Genre" genreName="Simulation" />
      <GenreButton id="Platformer-Genre" genreName="Platformer" />
      <GenreButton id="Multiplayer-Genre" genreName="Multiplayer" />
      <GenreButton id="Sports-Genre" genreName="Sports" />
      <GenreButton id="Fighting-Genre" genreName="Fighting" />
      <GenreButton id="Family-Genre" genreName="Family" />
    </div>
  );
};

export default GenreBar;
