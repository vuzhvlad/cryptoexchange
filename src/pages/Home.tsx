import InfoBanner from "../components/InfoBanner.tsx";
import TopPairs from "../components/TopPairs.tsx";
import Reviews from "../components/Reviews.tsx";
import HomePageInfoBanners from "../components/HomePageInfoBanners.tsx";

const Home = () => {
  return (
    <div>
      <InfoBanner />
      <TopPairs />
      <HomePageInfoBanners />
      <Reviews />
    </div>
  );
};

export default Home;
