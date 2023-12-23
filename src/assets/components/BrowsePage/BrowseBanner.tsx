import FilterBar from "./FilterBar";
import GenreBar from "./GenreBar";
import GamesGrid from "./GamesGrid";

const BrowseBanner = () => {
  return (
    <main className="browse-banner">
      <FilterBar />
      <GenreBar />
      <GamesGrid />
    </main>
  );
};

export default BrowseBanner;
