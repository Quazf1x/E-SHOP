import { useEffect, useState } from "react";
import fetchData from "../../API/FetchData.ts";
import getRandNum from "../../helpers/rand.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFire } from "@fortawesome/free-solid-svg-icons";

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
      <div>
        <h2>Featured videogames</h2>
      </div>
      <div id="banner-info">
        <h1>
          <FontAwesomeIcon icon={faFire} style={{ marginRight: "1rem" }} />
          All of your favourite videogames right here, right now.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nesciunt
          minima autem consequatur illo. Ea quibusdam, nemo explicabo saepe
          consequuntur tempore facere, in deleniti dolore reiciendis iusto sed,
          ratione aperiam!
        </p>
      </div>
      <div>4</div>
      <div id="carousel">5</div>
    </section>
  );
};

export default HomePage;
