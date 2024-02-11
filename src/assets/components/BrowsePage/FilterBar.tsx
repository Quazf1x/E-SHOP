import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faApple,
  faXbox,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";

import SystemCheckbox from "./SystemCheckbox";

const FilterBar = () => {
  return (
    <div className="filter-bar-wrapper">
      <div>
        <h3 className="browse-heading">System</h3>
        <SystemCheckbox system="windows" id="windows-check" icon={faWindows} />
        <SystemCheckbox system="apple" id="apple-check" icon={faApple} />
        <SystemCheckbox system="xbox" id="xbox-check" icon={faXbox} />
        <SystemCheckbox
          system="PS5"
          id="playstation-check"
          icon={faPlaystation}
        />
      </div>
      <div className="filter-search-wrapper">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input className="filter-search" />
      </div>
      <div className="filter-sort">
        <p>
          Sort by: <span>Rarity</span>
        </p>
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
