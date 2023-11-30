import { useEffect, useState } from "react";
import fetchData from "../../API/FetchData.ts";
import getRandNum from "../../helpers/rand.ts";
import Carousel from "./Carousel.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faFire,
  faGamepad,
  faRegistered,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Credit from "./Credit.tsx";

const MAX_PAGE = 5;

const HomePage = () => {
  const [banner, setBanner] = useState("");
  const [gameName, setGameName] = useState("");

  // useEffect(() => {
  //   const randPageNum: number = getRandNum(MAX_PAGE);
  //   const randGameNum: number = getRandNum(10);
  //   async function setData() {
  //     const randPage = await fetchData(randPageNum);
  //     const randGame = randPage.results[randGameNum];
  //     setBanner(randGame.background_image);
  //     setGameName(randGame.name);
  //     console.log(randGame);
  //   }

  //   setData();
  // }, []);

  const bgImg = `linear-gradient(to right, #000000ee 50%, #00000047),
  url(${banner}) 30% 20%`;

  return (
    <section className="home-banner">
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
            link="https://github.com/Quazf1x"
            icon={faRegistered}
            linkName="Rawg API"
          />
          ... and many more
        </div>
      </div>
      <div id="home-fifth-sec-wrapper">
        <Carousel />
      </div>
    </section>
  );
};

export default HomePage;
