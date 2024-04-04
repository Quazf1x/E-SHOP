import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const OrderedGame = () => {
  return (
    <li className="ordered-game">
      <p>Metal Gear Solid V: The Phantom Pain</p>
      <p>$14.88</p>
      <button>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
};

export default OrderedGame;
