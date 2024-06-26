import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div />
        <h1> E-SHOP </h1>
      </div>

      <nav>
        <ul className="link-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games/all?page=1">Browse</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
