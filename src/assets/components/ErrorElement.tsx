import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
const ErrorElement = () => {
  return (
    <div className="error-container">
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        size="2xl"
        style={{ color: "var(--lighter-primary)" }}
      />
      <h2>Something went wrong!</h2>
      <p>Try re-loading the page.</p>
    </div>
  );
};

export default ErrorElement;
