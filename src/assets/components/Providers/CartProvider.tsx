import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import OrderType from "../CheckoutPage/OrderType";

type ProviderType = {
  children: ReactNode;
};

type CartContextType = {
  cartList: OrderType[];
  setCartList: Dispatch<SetStateAction<object[]>>;
};

export const CartContext = createContext<CartContextType>({
  cartList: [],
  setCartList: () => {},
});

const CartProvider = ({ children }: ProviderType) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]");
  const [cartList, setCartList] = useState(cartLocalStorage);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
