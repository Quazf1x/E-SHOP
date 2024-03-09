import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ErrorElement from "../ErrorElement.tsx";

type carouselTypes = {
  isLoading: boolean;
  carouselData: gameDetails[];
  isError: boolean;
  maxIndex: number;
  hasDots: boolean;
};

type gameDetails = {
  background_image?: string;
  results?: object;
};

const Carousel = ({
  isLoading,
  carouselData,
  isError,
  maxIndex,
  hasDots,
}: carouselTypes) => {
  const [bannerIndex, setBannerIndex] = useState(0);
  let dotsElem;

  const handleNextSlide = () => {
    if (bannerIndex < maxIndex) setBannerIndex(bannerIndex + 1);
    else setBannerIndex(0);
  };

  const handlePrevSlide = () => {
    if (bannerIndex > 0) setBannerIndex(bannerIndex - 1);
    else setBannerIndex(maxIndex);
  };

  const handleDotSlide = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setBannerIndex((e.target as HTMLElement as any).dataset.index);
  };

  if (hasDots) {
    dotsElem = [...Array(maxIndex)].map((e, i) => (
      <button
        onClick={handleDotSlide}
        className="carousel-dot"
        data-index={i}
        key={i}
      ></button>
    ));
  }
  return (
    <div className="carousel-slider">
      {isLoading ? (
        <div className="loader"></div>
      ) : isError ? (
        <ErrorElement />
      ) : (
        <>
          <button
            onClick={handlePrevSlide}
            className="carousel-btn carousel-left-btn"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {/* will add links later */}
          <Link className="carousel-img-wrapper" to="#">
            <div className="grad-overlay"></div>
            <img
              className="carousel-banner-img"
              src={
                carouselData[bannerIndex].background_image == undefined
                  ? carouselData[bannerIndex].image
                  : carouselData[bannerIndex].background_image
              }
            />
            <div className="dots-wrapper">{dotsElem}</div>
          </Link>
          <button
            onClick={handleNextSlide}
            className="carousel-btn carousel-right-btn"
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
