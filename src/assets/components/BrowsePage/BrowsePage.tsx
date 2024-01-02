import Header from "../Header/header";
import FilterBar from "./FilterBar";
import GenreBar from "./GenreBar";
import GamesGrid from "./GamesGrid";

const BrowsePage = () => {
  return (
    <>
      <Header />
      <main className="browse-banner">
        <FilterBar />
        <GenreBar />
        <GamesGrid />
      </main>
    </>
  );
};

export default BrowsePage;
