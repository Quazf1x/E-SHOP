import Header from "../Header/header.tsx";
import FilterBar from "./FilterBar.tsx";
import GenreBar from "./GenreBar.tsx";
import GamesGrid from "./GamesGrid.tsx";
import fetchData from "../../API/FetchData.ts";
import { useEffect } from "react";

const BrowsePage = () => {
  // useEffect(() => {
  //   async function setData() {
  //     const page = await fetchData("games", {
  //       genres: "action",
  //       page: "1",
  //     });
  //     console.log(page);
  //   }

  //   setData();
  // }, []);

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
