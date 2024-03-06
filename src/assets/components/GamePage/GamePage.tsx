import Header from "../Header/header";
import useFetch from "../../API/useFetch";
import Carousel from "../HomePage/Carousel";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const { id } = useParams();
  const [isLoadingDetails, gameDetails, isErrorDetails] = useFetch(
    `games/${id}`,
  );
  const [isLoadingScreens, gameScreens, isErrorScreens] = useFetch(
    `games/${id}/screenshots`,
  );
  console.log(gameScreens);
  console.log(gameDetails);
  return (
    <>
      <Header />
      <main className="game-banner">
        <Carousel />
      </main>
    </>
  );
};

export default GamePage;
