import Header from "../Header/header.tsx";
import OrderedGame from "./OrderedGame.tsx";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <main className="checkout-banner">
        <h1>Checkout</h1>
        <ul className="order-list">
          <OrderedGame />
          <OrderedGame />
          <OrderedGame />
        </ul>
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
