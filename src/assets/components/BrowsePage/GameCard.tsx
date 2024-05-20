import getPrice from "../../helpers/prices.ts";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { addToCart } from "../../helpers/storage.ts";
import { CartContext } from "../Providers/CartProvider.tsx";
import { motion } from "framer-motion";
import { gameCardVariants } from "../../helpers/motionConstants.ts";

type gameTypes = {
  bgImg: string;
  gameName: string;
  id: number;
};

const MotionLink = motion(Link);

const GameCard = ({ bgImg, gameName, id }: gameTypes) => {
  const { cartList, setCartList } = useContext(CartContext);
  const [isAdded, setAdded] = useState(false);

  const price = getPrice(id);

  return (
    <MotionLink
      variants={gameCardVariants}
      to={`/games/game/${id}`}
      className="gamecard"
    >
      <img src={bgImg} alt={gameName} />
      <div className="gamecard-info-wrapper">
        <h4 className="gamecard-name">{gameName}</h4>
        <div>
          <p className="gamecard-price">{price}$</p>
          <button
            onClick={(e) =>
              addToCart(e, gameName, price, cartList, setCartList, setAdded)
            }
            className={
              isAdded
                ? "gamecard-add-btn gamecard-add-btn-added"
                : "gamecard-add-btn"
            }
          >
            {isAdded ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </MotionLink>
  );
};

export default GameCard;
