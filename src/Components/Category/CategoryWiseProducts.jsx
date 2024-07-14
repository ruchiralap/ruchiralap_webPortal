import { useParams } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";
import CategoryProductsCard from "./CategoryProductsCard";

const CategoryWiseProducts = () => {
  const [allProducts] = useAllProducts();

  const { category_name } = useParams();

  const products =
    allProducts &&
    allProducts?.filter((itm) => itm?.category_name == category_name);
  // console.log("object", products);

  return (
    <>
      <div className="px-5 lg:px-8 mx-auto max-w-7xl">
        <div className="py-10">
          <h2 className="text-3xl font-semibold">
            <span>All </span>
            <span className=" p-1 border-b border-[#EEAB0F] text-[#EEAB0F]">
              {category_name}
            </span>{" "}
            <span>Products:</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products &&
            products?.map((product) => (
              <CategoryProductsCard key={product?._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryWiseProducts;
