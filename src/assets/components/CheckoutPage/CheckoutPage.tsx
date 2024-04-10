import Header from "../Header/header.tsx";
import OrderedGame from "./OrderedGame.tsx";
import { useState, useEffect } from "react";

const CheckoutPage = () => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]");
  const [cartList, setCartList] = useState(cartLocalStorage);

  const ordersContent =
    cartList == 0 ? (
      <h1 className="empty-cart">You don't have any items in the cart.</h1>
    ) : (
      cartList.map((order) => {
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

  return (
    <>
      <Header />
      <main className="checkout-banner">
        <h1>Checkout</h1>
        <ul className="order-list">{ordersContent}</ul>
        <div className="confirm-order-wrapper">
          <h2>
            Total: <span>$14.88</span>
          </h2>
          <button>Buy</button>
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;
