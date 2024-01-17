import Header from "../Header/header.tsx";
import FilterBar from "./FilterBar.tsx";
import GenreBar from "./GenreBar.tsx";
import GamesGrid from "./GamesGrid.tsx";
import fetchData from "../../API/FetchData.ts";
import { useEffect, useState } from "react";

const BrowsePage = () => {
  // edit any type laterrrrrr
  const [videogameList, setVideogameList] = useState<any>(["Empty"]);

  useEffect(() => {
    async function setData() {
      const list = await fetchData("games");
      setVideogameList(list.results);
    }

    setData();
  }, []);

  return (
    <>
      <Header />
      <main className="browse-banner">
        <FilterBar />
        <GenreBar />
        <GamesGrid gameList={videogameList} />
      </main>
    </>
  );
};

export default BrowsePage;
