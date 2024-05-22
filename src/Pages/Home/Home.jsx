import Category from "../../Components/Category/Category";
import BestProducts from "./BestProducts";
import Commitment from "./Commitment";

import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <BestProducts />
      <Category />
      <Commitment />
    </>
  );
};

export default Home;
