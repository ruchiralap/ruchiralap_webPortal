import useAllProducts from "../../Hooks/useAllProducts";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";

const AllProducts = () => {
  const [allProducts] = useAllProducts();

  return (
    <>
      <div>
        <Products products={allProducts} />
        <Sidebar />
      </div>
    </>
  );
};

export default AllProducts;
