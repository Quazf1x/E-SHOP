import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../Providers/CartProvider.tsx";
import OrderType from "./OrderType.ts";
import { motion, AnimatePresence } from "framer-motion";

const OrderedGame = ({ name, price }: OrderType) => {
  const { cartList, setCartList } = useContext(CartContext);

  const removeOrder = () => {
    setCartList(
      cartList.filter((order) => {
        return order.name !== name;
      }),
    );
  };

  return (
    <AnimatePresence>
      <motion.li className="ordered-game">
        <p className="ordered-game-name">{name}</p>
        <div className="order-price-wrapper">
          <p>{price}$</p>
        </div>
        <button onClick={removeOrder}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </motion.li>
    </AnimatePresence>
  );
};

export default OrderedGame;
