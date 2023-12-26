import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faApple,
  faXbox,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";

const FilterBar = () => {
  return (
    <div className="filter-bar-wrapper">
      <div>
        <h3 className="filter-heading">System</h3>
        <FontAwesomeIcon icon={faWindows} />
        <FontAwesomeIcon icon={faApple} />
        <FontAwesomeIcon icon={faXbox} />
        <FontAwesomeIcon icon={faPlaystation} />
      </div>
      <div className="filter-search-wrapper">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input className="filter-search" />
      </div>
      <div className="filter-sort">
        <p>Sort by: </p>
        <span>Rarity</span>
        <ul className="filter-sort-content">
          <li>Rarity</li>
          <li>Name</li>
          <li>Released</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBar;
