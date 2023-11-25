import { useEffect, useState } from "react";
import fetchData from "../../API/FetchData.ts";
import getRandNum from "../../helpers/rand.ts";

const MAX_PAGE = 5;

const HomePage = () => {
  const [banner, setBanner] = useState("");
  const [gameName, setGameName] = useState("");

  useEffect(() => {
    const randPageNum: number = getRandNum(MAX_PAGE);
    const randGameNum: number = getRandNum(10);
    async function setData() {
      const randPage = await fetchData(randPageNum);
      const randGame = randPage.results[randGameNum];
      setBanner(randGame.background_image);
      setGameName(randGame.name);
      console.log(randGame);
    }

    setData();
  }, []);

  const bgImg = `linear-gradient(to right, #00000099 50%, transparent),
  url(${banner}) 50% 20%`;

  return (
    <section style={{ background: bgImg }} className="home-banner">
      <div>
        <h1>{gameName}</h1>
        <div>
          <p className="banner-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            eligendi aspernatur ducimus, quidem eos recusandae non possimus
            laboriosam tenetur provident architecto animi illo, hic
            necessitatibus minus. Officiis dolore totam in!
          </p>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
