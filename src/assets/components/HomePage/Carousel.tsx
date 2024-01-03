import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../../API/FetchData.ts";
import getRandNum from "../../helpers/rand.ts";

const MAX_PAGE: number = 5;
const MIN_PAGE: number = 1;

const Carousel = () => {
  const [bannerList, setBannerList] = useState("");
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const randPageNum: number = getRandNum(MAX_PAGE, MIN_PAGE);
    async function setData() {
      const randPage = await fetchData("games", {
        page: randPageNum.toString(),
      });
      setBannerList(randPage.results);
      setLoading(false);
    }

    setData();
  }, []);

  const handleNextSlide = () => {
    if (bannerIndex < 19) setBannerIndex(bannerIndex + 1);
    else setBannerIndex(0);
  };

  const handlePrevSlide = () => {
    if (bannerIndex > 0) setBannerIndex(bannerIndex - 1);
    else setBannerIndex(19);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-slider">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <>
            <button
              onClick={handlePrevSlide}
              className="carousel-btn carousel-left-btn"
            >
              &lt;
            </button>
            {/* will add links later */}
            <Link to="#">
              <img
                className="carousel-banner-img"
                src={bannerList[bannerIndex].background_image}
              ></img>
            </Link>
            <button
              onClick={handleNextSlide}
              className="carousel-btn carousel-right-btn"
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
