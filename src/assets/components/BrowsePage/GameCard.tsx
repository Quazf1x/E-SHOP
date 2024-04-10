import getPrice from "../../helpers/prices.ts";
import { Link } from "react-router-dom";

type gameTypes = {
  bgImg: string;
  gameName: string;
  id: number;
  cartList: object;
  setCartList: any;
};

const GameCard = ({
  bgImg,
  gameName,
  id,
  cartList,
  setCartList,
}: gameTypes) => {
  const price = getPrice(id);

  const addToCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCartList([...cartList, { name: gameName, price: price }]);
  };

  return (
    <Link to={`/games/game/${id}`} className="gamecard">
      <img src={bgImg} alt={gameName} />
      <div className="gamecard-info-wrapper">
        <h4 className="gamecard-name">{gameName}</h4>
        <div>
          <p className="gamecard-price">{price}$</p>
          <button onClick={addToCard} className="gamecard-add-btn">
            Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
