import HomeBanner from "./HomeBanner.tsx";
//import LastSeenBanner from "./LastSeenBanner.tsx";
import Header from "../Header/Header.tsx";
import { pageTransitionMotion } from "../../helpers/motionConstants.ts";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={pageTransitionMotion.initial}
      animate={pageTransitionMotion.animate}
      transition={pageTransitionMotion.transition}
      exit={pageTransitionMotion.exit}
    >
      <Header />
      <HomeBanner />
      {/* <LastSeenBanner /> */}
    </motion.div>
  );
};

export default HomePage;
