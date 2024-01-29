import Header from "../Header/header.tsx";
import FilterBar from "./FilterBar.tsx";
import GenreBar from "./GenreBar.tsx";
import GamesGrid from "./GamesGrid.tsx";
import BrowseFooter from "./BrowseFooter.tsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BrowsePage = () => {
  const { page } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return (
    <>
      <Header />
      <main className="browse-banner">
        <FilterBar />
        <GenreBar />
        <GamesGrid page={page} />
        <BrowseFooter />
      </main>
    </>
  );
};

export default BrowsePage;
