import Category from "../../Components/Category/Category";
import BestProducts from "./BestProducts";
import Commitment from "./Commitment";
import Banner from "./Banner/Banner";
import Process from "./Process";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <BestProducts />
      <Process />
      <Commitment />
    </>
  );
};

export default Home;
