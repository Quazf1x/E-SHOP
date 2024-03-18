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

import Carousel from "./Carousel.tsx";
import getRandNum from "../../helpers/rand.ts";
import useFetch from "../../API/useFetch.ts";
import Credit from "./Credit.tsx";

const MAX_PAGE: number = 5;
const MIN_PAGE: number = 1;
const randPageNum: string = getRandNum(MAX_PAGE, MIN_PAGE).toString();

const HomeBanner = () => {
  const params: Record<string, string> = useMemo(() => {
    return { page: randPageNum };
  }, []);

  const [isLoading, carouselData, isError] = useFetch("games", params);

  return (
    <main className="home-banner">
      <div id="banner-prefix">
        <FontAwesomeIcon icon={faCheck} style={{ color: "var(--primary)" }} />
        <p>Version 1.0 online!</p>
      </div>
      <div id="carousel-header-wrapper">
        <h2>
          Featured videogames{" "}
          <FontAwesomeIcon icon={faStar} style={{ color: "var(--primary)" }} />
        </h2>
      </div>
      <div id="banner-info">
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
          <button className="banner-btn buy-btn">
            <FontAwesomeIcon icon={faGamepad} />
            Browse
          </button>
          <button className="banner-btn bleak-btn">Placeholder</button>
        </div>
      </div>
      <div id="banner-credits">
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
      <div id="home-fifth-sec-wrapper">
        <div className="carousel-main-wrapper">
          <Carousel
            isLoading={isLoading}
            carouselData={carouselData?.results}
            isError={isError}
            hasDots={false}
          />
        </div>
      </div>
    </main>
  );
};

export default HomeBanner;
