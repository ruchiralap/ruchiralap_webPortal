import Category from "../../Components/Category/Category";
import BestProducts from "./BestProducts";
import Commitment from "./Commitment";
import Banner from "./Banner/Banner";
import Process from "./Process";
import TrendingProducts from "./TrendingProducts/TrendingProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <BestProducts />
      <Process />
      <TrendingProducts />
      <Commitment />
    </>
  );
};

export default Home;
