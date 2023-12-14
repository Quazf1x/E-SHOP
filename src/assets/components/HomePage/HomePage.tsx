import HomeBanner from "./HomeBanner.tsx";
import LastSeenBanner from "./LastSeenBanner.tsx";
import Header from "../Header/header.tsx";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <LastSeenBanner />
    </>
  );
};

export default HomePage;
