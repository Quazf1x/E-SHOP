import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const LastSeenBanner = () => {
  return (
    <section className="last-seen-banner">
      <div className="last-seen-wrapper">
        <div id="last-seen-left-half">
          <FontAwesomeIcon icon={faFire} />
          <h3>Last seen</h3>
        </div>
        <div id="last-seen-right-half">
          <a>
            <img src="https://images.unsplash.com/photo-1683009427666-340595e57e43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </a>
          <a>
            <img src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </a>
          <a>
            <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LastSeenBanner;
