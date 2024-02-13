import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

type SystemCheckboxTypes = {
  id: string;
  system: string;
  icon: IconDefinition;
};

const SystemCheckbox = ({ id, system, icon }: SystemCheckboxTypes) => {
  //const [checked, setChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const newSearchParam =
      searchParams.get("system") == undefined
        ? system
        : searchParams.get("system")?.concat(",", system);
    if (checked) {
      setSearchParams((params) => {
        params.set("system", newSearchParam);
        return params;
      });
    } else {
      setSearchParams((params) => {
        params.delete("system", newSearchParam.replace("," + system, ""));
        return params;
      });
    }
    console.log(newSearchParam.replace(system, ""));
  };

  return (
    <label className="system-checkbox-label" htmlFor={id}>
      <input
        id={id}
        className="system-checkbox"
        type="checkbox"
        //checked={checked}
        onChange={onCheck}
      />
      <FontAwesomeIcon icon={icon} />
    </label>
  );
};

export default SystemCheckbox;
