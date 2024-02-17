import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faApple,
  faXbox,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";
import { useSearchParams } from "react-router-dom";

import SystemCheckbox from "./SystemCheckbox";
import { useState } from "react";

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currSystems, setCurrSystems] = useState<string[]>([]);

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const system: string = e.target.dataset.system;
    const checked = e.target.checked;
    let _currSyms = currSystems;

    if (checked) {
      _currSyms.push(system);
    } else {
      _currSyms = _currSyms.filter((sys) => sys != system);
    }

    setCurrSystems(_currSyms);
    setSearchParams((params) => {
      params.set("platforms", _currSyms.join(","));
      if (currSystems.length > 0 && _currSyms.length < 1) {
        params.delete("platforms");
      }
      return params;
    });
  };

  return (
    <div className="filter-bar-wrapper">
      <div>
        <h3 className="browse-heading">System</h3>
        <SystemCheckbox
          onCheck={onCheck}
          system="windows"
          id="windows-check"
          icon={faWindows}
        />
        <SystemCheckbox
          onCheck={onCheck}
          system="apple"
          id="apple-check"
          icon={faApple}
        />
        <SystemCheckbox
          onCheck={onCheck}
          system="xbox"
          id="xbox-check"
          icon={faXbox}
        />
        <SystemCheckbox
          onCheck={onCheck}
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
