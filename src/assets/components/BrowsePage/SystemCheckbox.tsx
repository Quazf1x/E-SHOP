import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type SystemCheckboxTypes = {
  id: string;
  icon: IconDefinition;
};

const SystemCheckbox = ({ id, icon }: SystemCheckboxTypes) => {
  return (
    <label className="system-checkbox-label" htmlFor={id}>
      <input id={id} className="system-checkbox" type="checkbox" />
      <FontAwesomeIcon icon={icon} />
    </label>
  );
};

export default SystemCheckbox;
