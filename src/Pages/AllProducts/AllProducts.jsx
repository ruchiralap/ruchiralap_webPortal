import { useEffect, useState } from "react";
import useAllProducts from "../../Hooks/useAllProducts";
import Sidebar from "./Sidebar/Sidebar";

const AllProducts = () => {
  const [allProducts] = useAllProducts();
  const [isProducts, setIsProducts] = useState([]);

  useEffect(() => {
    setIsProducts(allProducts);
  }, [allProducts]);

  const handleCategory = (e) => {
    const categoryName = allProducts.filter((itm) =>
      itm.category_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setIsProducts(categoryName);
  };

  const handlePrice = (e) => {
    const categoryName = allProducts.filter((itm) =>
      itm.price.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setIsProducts(categoryName);
  };

  return (
    <>
      <div className=" mt-10">
        <Sidebar
          isProducts={isProducts}
          products={allProducts}
          handleCategory={handleCategory}
          handlePrice={handlePrice}
        />
      </div>
    </>
  );
};

export default AllProducts;
