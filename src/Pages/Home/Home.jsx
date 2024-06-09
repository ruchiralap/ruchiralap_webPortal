import Category from "../../Components/Category/Category";
import BestProducts from "./BestProducts";
import Commitment from "./Commitment";
import Banner from "./Banner/Banner";
import Process from "./Process";
import Offer from "../Offer/Offer";

const Home = () => {
  return (
    <>
      <Banner />
      <Offer />
      <BestProducts />
      <Process />
      <Commitment />
      <Category />
    </>
  );
};

export default Home;
