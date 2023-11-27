import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type CreditTypes = {
  link: string;
  icon: IconDefinition;
  linkName: string;
};

const Credit = ({ link, icon, linkName }: CreditTypes) => {
  return (
    <a className="credit-wrapper" href={link} target="_blank">
      <FontAwesomeIcon icon={icon} />
      {linkName}
    </a>
  );
};

export default Credit;
