import useAllProducts from "../../Hooks/useAllProducts";
import Sidebar from "./Sidebar/Sidebar";

const AllProducts = () => {
  const [allProducts] = useAllProducts();

  return (
    <>
      <div className=" mt-10">
        <Sidebar products={allProducts} />
      </div>
    </>
  );
};

export default AllProducts;
