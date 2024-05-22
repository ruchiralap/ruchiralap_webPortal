import { useParams } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";
import ProductsCard from "./ProductsCard";

const CategoryWiseProducts = () => {
  const [allProducts] = useAllProducts();

  const { category_name } = useParams();
  // console.log("category_name", category_name);

  const products =
    allProducts &&
    allProducts?.filter((itm) => itm?.category_name == category_name);
  //   console.log("object", products);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto mt-20">
        {products &&
          products?.map((product) => (
            <ProductsCard key={product?._id} product={product} />
          ))}
      </div>
    </>
  );
};

export default CategoryWiseProducts;
