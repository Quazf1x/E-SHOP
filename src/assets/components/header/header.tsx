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
            <Link to="#">Home</Link>
          </li>
          <hr />
          <li>
            <Link to="#">Browse</Link>
          </li>
          <hr />
          <li>
            <Link to="#">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
