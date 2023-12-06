import { useEffect, useState } from "react";
import fetchData from "../../API/FetchData.ts";
import getRandNum from "../../helpers/rand.ts";

const MAX_PAGE = 5;

const Carousel = () => {
  const [banner, setBanner] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const randPageNum: number = getRandNum(MAX_PAGE);
    const randGameNum: number = getRandNum(10);
    async function setData() {
      const randPage = await fetchData(randPageNum);
      const randGame = randPage.results[randGameNum];
      setBanner(randGame.background_image);
      console.log(randGame);
      setLoading(false);
    }

    setData();
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-slider">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <>
            <button className="carousel-btn carousel-left-btn">&lt;</button>
            <img src={banner}></img>
            <button className="carousel-btn carousel-right-btn">&gt;</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
