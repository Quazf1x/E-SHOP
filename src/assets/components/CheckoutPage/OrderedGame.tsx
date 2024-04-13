import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import OrderType from "./OrderType.ts";

type OrderTypes = {
  name: string;
  price: number;
  cartList: OrderType[];
  setCartList: React.Dispatch<React.SetStateAction<object[]>>;
};

const OrderedGame = ({ name, price, cartList, setCartList }: OrderTypes) => {
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
      <button onClick={removeOrder}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
};

export default OrderedGame;
