import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const LastSeenBanner = () => {
  return (
    <section className="last-seen-banner">
      <div className="last-seen-wrapper">
        <div id="last-seen-left-half">
          <FontAwesomeIcon color="var(--lighter-primary)" icon={faFire} />
          <h3>Last seen</h3>
        </div>
        <div id="last-seen-right-half">
          <a href="#" target="_blank">
            <img src="https://i.playground.ru/p/eU46B-9iIR4ORh9PkXvIZw.jpeg" />
          </a>
          <a href="#" target="_blank">
            <img src="https://cubiq.ru/wp-content/uploads/2019/07/PORTAL_WALLPAPER1.jpg" />
          </a>
          <a href="#" target="_blank">
            <img src="https://cdn1.epicgames.com/offer/975d251af0384c88a898a996bda4881d/EGS_PathfinderWrathoftheRighteousEnhancedEdition_OwlcatGames_S1_2560x1440-1f8fcc6e75c681f3976fdd01b413ed68" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LastSeenBanner;
