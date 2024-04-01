import Header from "../Header/header";
import useFetch from "../../API/useFetch";
import { useParams } from "react-router-dom";
import Carousel from "../HomePage/Carousel";
import ErrorElement from "../ErrorElement";
import GameInfo from "./GameInfo";

const GamePage = () => {
  const { id } = useParams();
  const [isLoadingDetails, gameDetails, isErrorDetails] = useFetch(
    `games/${id}`,
  );
  const [isLoadingScreens, gameScreens, isErrorScreens] = useFetch(
    `games/${id}/screenshots`,
  );

  return (
    <>
      {isLoadingDetails ? (
        <div className="loader"></div>
      ) : isErrorDetails ? (
        <ErrorElement />
      ) : (
        <>
          <Header />
          <main className="game-banner">
            <h1 className="gamepage-header">{gameDetails.name}</h1>
            <GameInfo gameDetails={gameDetails} />
            <Carousel
              isLoading={isLoadingScreens}
              carouselData={gameScreens.results}
              isError={isErrorScreens}
              hasDots={true}
              link={false}
            />
            <div className="gamepage-price-wrapper">
              <p>Buy {gameDetails.name}</p>
              <button className="gamepage-buy-btn">Add to Cart</button>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default GamePage;
