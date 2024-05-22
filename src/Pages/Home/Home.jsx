import Category from "../../Components/Category/Category";
import BestProducts from "./BestProducts";

import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <> <Banner></Banner>
      <BestProducts />
      <Category />
    </>
  );
};

export default Home;
