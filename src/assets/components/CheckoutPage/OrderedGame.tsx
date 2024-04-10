import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type OrderTypes = {
  name: string;
  price: number;
  cartList: {
    name: string;
    price: number;
  }[];
  setCartList: any;
};

const OrderedGame = ({ name, price, cartList, setCartList }: OrderTypes) => {
  const removeOrder = (e) => {
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
