import Category from "../../Components/Category/Category";
import BestProducts from "./BestProducts";
import Commitment from "./Commitment";
import Banner from "./Banner/Banner";
import Process from "./Process";
import Offer from "../Offer/Offer";
import TrendingProducts from "./TrendingProducts/TrendingProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <Offer />
      <Category />
      <BestProducts />
      <Process />
      <TrendingProducts />
      <Commitment />
    </>
  );
};

export default Home;
