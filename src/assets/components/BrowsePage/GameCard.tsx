import getPrice from "../../helpers/prices.ts";
import { Link } from "react-router-dom";

type gameTypes = {
  bgImg: string;
  gameName: string;
  id: number;
};

const GameCard = ({ bgImg, gameName, id }: gameTypes) => {
  const price = getPrice(id);

  return (
    <Link to={`/games/game/${id}`} className="gamecard">
      <img src={bgImg} alt={gameName} />
      <div className="gamecard-info-wrapper">
        <h4 className="gamecard-name">{gameName}</h4>
        <div>
          <p className="gamecard-price">{price}$</p>
          <button className="gamecard-add-btn">Add</button>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
