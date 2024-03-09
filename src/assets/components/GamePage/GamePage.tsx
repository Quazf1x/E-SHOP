import Header from "../Header/header";
import useFetch from "../../API/useFetch";
import { useParams } from "react-router-dom";
import Carousel from "../HomePage/Carousel";

const GamePage = () => {
  const { id } = useParams();
  const [isLoadingDetails, gameDetails, isErrorDetails] = useFetch(
    `games/${id}`,
  );
  const [isLoadingScreens, gameScreens, isErrorScreens] = useFetch(
    `games/${id}/screenshots`,
  );
  console.log(gameScreens.results);
  console.log(gameDetails);
  return (
    <>
      <Header />
      <main className="game-banner">
        <h1 className="gamepage-header">{gameDetails.name}</h1>
        <div className="gamepage-infoblock">2</div>
        <Carousel
          isLoading={isLoadingScreens}
          carouselData={gameScreens.results}
          isError={isErrorScreens}
          maxIndex={5}
        />
      </main>
    </>
  );
};

export default GamePage;
