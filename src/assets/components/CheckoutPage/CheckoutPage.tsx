import Header from "../Header/header.tsx";
import OrderedGame from "./OrderedGame.tsx";
import OrderType from "./OrderType.ts";
import { useState, useEffect } from "react";

const CheckoutPage = () => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]");
  const [cartList, setCartList] = useState(cartLocalStorage);

  const ordersContent =
    cartList == 0 ? (
      <h1 className="empty-cart">You don't have any items in the cart.</h1>
    ) : (
      cartList.map((order: OrderType) => {
        return (
          <OrderedGame
            key={`key-${order.name}`}
            name={order.name}
            price={order.price}
            cartList={cartList}
            setCartList={setCartList}
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
