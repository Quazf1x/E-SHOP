import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../API/useFetch.ts";
import getRandNum from "../../helpers/rand.ts";
import ErrorElement from "../ErrorElement.tsx";

const MAX_PAGE: number = 5;
const MIN_PAGE: number = 1;
const randPageNum: string = getRandNum(MAX_PAGE, MIN_PAGE).toString();

const Carousel = () => {
  const params: Record<string, string> = useMemo(() => {
    return { page: randPageNum };
  }, []);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isLoading, bannerData, isError] = useFetch("games", params);

  const handleNextSlide = () => {
    if (bannerIndex < 19) setBannerIndex(bannerIndex + 1);
    else setBannerIndex(0);
  };

  const handlePrevSlide = () => {
    if (bannerIndex > 0) setBannerIndex(bannerIndex - 1);
    else setBannerIndex(19);
  };

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
              src={bannerData?.results[bannerIndex].background_image}
            />
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
