import Header from "../Header/Header.tsx";
import OrderedGame from "./OrderedGame.tsx";
import OrderType from "./OrderType.ts";
import { CartContext } from "../Providers/CartProvider.tsx";
import { pageTransitionMotion } from "../../helpers/motionConstants.ts";
import { motion } from "framer-motion";

import { useEffect, useContext, useMemo } from "react";

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

  const totalPrice = useMemo(() => {
    return cartList.reduce(
      (totalSum, currentProduct) => totalSum + currentProduct.price,
      0,
    );
  }, [cartList]);

  return (
    <motion.div
      initial={pageTransitionMotion.initial}
      animate={pageTransitionMotion.animate}
      transition={pageTransitionMotion.transition}
      exit={pageTransitionMotion.exit}
    >
      <Header />
      <main className="checkout-banner">
        <h1 className="checkout-slide-right">Checkout</h1>
        <ul className="order-list checkout-slide-right">{ordersContent}</ul>
        <div className="confirm-order-wrapper checkout-slide-left">
          <h2>
            Total: <span>${totalPrice.toFixed(2)}</span>
          </h2>
          <button>Buy</button>
        </div>
      </main>
    </motion.div>
  );
};

export default CheckoutPage;
