import getPrice from "../../helpers/prices.ts";

type gameTypes = {
  bgImg: string;
  gameName: string;
  id: number;
};

const GameCard = ({ bgImg, gameName, id }: gameTypes) => {
  const price = getPrice(id);

  return (
    <div className="gamecard">
      <img src={bgImg} />
      <div className="gamecard-info-wrapper">
        <h4 className="gamecard-name">{gameName}</h4>
        <div>
          <p className="gamecard-price">{price}$</p>
          <button className="gamecard-add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
