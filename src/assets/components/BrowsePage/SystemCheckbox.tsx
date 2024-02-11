import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";

type SystemCheckboxTypes = {
  id: string;
  system: string;
  icon: IconDefinition;
};

const SystemCheckbox = ({ id, system, icon }: SystemCheckboxTypes) => {
  const [checked, setChecked] = useState(false);

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  return (
    <label className="system-checkbox-label" htmlFor={id}>
      <input
        id={id}
        className="system-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onCheck}
      />
      <FontAwesomeIcon icon={icon} />
    </label>
  );
};

export default SystemCheckbox;
