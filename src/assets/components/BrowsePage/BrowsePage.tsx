import Header from "../Header/header.tsx";
import FilterBar from "./FilterBar.tsx";
import GenreBar from "./GenreBar.tsx";
import GamesGrid from "./GamesGrid.tsx";
import useFetch from "../../API/useFetch.ts";

const BrowsePage = () => {
  // edit any type laterrrrrr
  const [isLoading, videogameList, error] = useFetch("games");

  return (
    <>
      <Header />
      <main className="browse-banner">
        <FilterBar />
        <GenreBar />
        <GamesGrid isLoading={isLoading} gameList={videogameList.results} />
      </main>
    </>
  );
};

export default BrowsePage;
