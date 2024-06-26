import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faFire,
  faGamepad,
  faRegistered,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import Carousel from "./Carousel.tsx";
import getRandNum from "../../helpers/rand.ts";
import useFetch from "../../API/useFetch.ts";
import Credit from "./Credit.tsx";
import { HomeGameScreensTypes } from "../../API/dataTypes.ts";

const HomeBanner = () => {
  const MAX_PAGE: number = 5;
  const MIN_PAGE: number = 1;
  const randPageNum: string = getRandNum(MAX_PAGE, MIN_PAGE).toString();

  const params: Record<string, string> = useMemo(() => {
    return { page: randPageNum };
  }, []);

  const [isLoading, carouselData, isError] = useFetch<HomeGameScreensTypes>(
    "games",
    params,
  );

  return (
    <main className="home-banner">
      <div className="home-slide-left" id="banner-prefix">
        <FontAwesomeIcon icon={faCheck} style={{ color: "var(--primary)" }} />
        <p>Version 1.0 online!</p>
      </div>
      <div className="home-slide-right" id="carousel-header-wrapper">
        <h2>
          Featured videogames
          <FontAwesomeIcon icon={faStar} style={{ color: "var(--primary)" }} />
        </h2>
      </div>
      <div className="home-slide-left" id="banner-info">
        <h1>
          <FontAwesomeIcon icon={faFire} style={{ marginRight: "1rem" }} />
          All of your favourite <span className="highlight">videogames</span>
          right here, right now.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nesciunt
          minima autem consequatur illo. Ea quibusdam, nemo explicabo saepe
          consequuntur tempore facere, in deleniti dolore reiciendis iusto sed,
          ratione aperiam!
        </p>
        <div id="banner-btn-wrapper">
          <Link to="/games/all?page=1" className="banner-btn buy-btn">
            <FontAwesomeIcon icon={faGamepad} />
            Browse
          </Link>
          <Link to="/checkout" className="banner-btn bleak-btn">
            Checkout
          </Link>
        </div>
      </div>
      <div className="home-slide-left" id="banner-credits">
        <h3>Credits</h3>
        <div>
          <Credit
            link="https://github.com/Quazf1x"
            icon={faGithub}
            linkName="Quazf1x"
          />
          <Credit
            link="https://rawg.io/apidocs"
            icon={faRegistered}
            linkName="Rawg API"
          />
          ... and many more
        </div>
      </div>
      <div className="home-slide-right" id="home-fifth-sec-wrapper">
        <div className="carousel-main-wrapper">
          <Carousel
            isLoading={isLoading}
            carouselData={carouselData?.results}
            isError={isError}
            hasDots={false}
            link={true}
          />
        </div>
      </div>
    </main>
  );
};

export default HomeBanner;
