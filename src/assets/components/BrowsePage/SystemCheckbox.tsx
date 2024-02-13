import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type SystemCheckboxTypes = {
  id: string;
  system: string;
  icon: IconDefinition;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SystemCheckbox = ({ id, system, icon, onCheck }: SystemCheckboxTypes) => {
  return (
    <label className="system-checkbox-label" htmlFor={id}>
      <input
        id={id}
        className="system-checkbox"
        type="checkbox"
        data-system={system}
        onChange={onCheck}
      />
      <FontAwesomeIcon icon={icon} />
    </label>
  );
};

export default SystemCheckbox;
