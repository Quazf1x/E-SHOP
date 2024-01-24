import Header from "../Header/header.tsx";
import FilterBar from "./FilterBar.tsx";
import GenreBar from "./GenreBar.tsx";
import GamesGrid from "./GamesGrid.tsx";

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
