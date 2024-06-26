import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../Providers/CartProvider.tsx";
import OrderType from "./OrderType.ts";

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
    <li className="ordered-game">
      <p className="ordered-game-name">{name}</p>
      <div className="order-price-wrapper">
        <p>{price}$</p>
      </div>
      <button className="order-delete-btn" onClick={removeOrder}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
};

export default OrderedGame;
