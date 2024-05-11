import Header from "../Header/Header.tsx";
import OrderedGame from "./OrderedGame.tsx";
import OrderType from "./OrderType.ts";
import { CartContext } from "../Providers/CartProvider.tsx";
import { useEffect, useContext } from "react";

const CheckoutPage = () => {
  const { cartList } = useContext(CartContext);

  const ordersContent =
    cartList.length == 0 ? (
      <h1 className="empty-cart">You don't have any items in the cart.</h1>
    ) : (
      cartList.map((order: OrderType) => {
        return (
          <OrderedGame
            key={`key-${order.name}`}
            name={order.name}
            price={order.price}
          />
        );
      })
    );

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  let totalPrice = 0;
  cartList.forEach((order: OrderType) => (totalPrice += order.price));

  return (
    <>
      <Header />
      <main className="checkout-banner">
        <h1>Checkout</h1>
        <ul className="order-list">{ordersContent}</ul>
        <div className="confirm-order-wrapper">
          <h2>
            Total: <span>${totalPrice.toFixed(2)}</span>
          </h2>
          <button>Buy</button>
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;
