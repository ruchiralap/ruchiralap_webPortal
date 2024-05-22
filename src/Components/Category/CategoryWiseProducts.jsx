import { useParams } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";

const CategoryWiseProducts = () => {
  const [allProducts] = useAllProducts();

  const { category_name } = useParams();
    console.log("category_name", category_name); 

  const products =
    allProducts &&
    allProducts?.filter((itm) => itm?.category_name == category_name);

  console.log("object", products);

  return (
    <>
      <section></section>
    </>
  );
};

export default CategoryWiseProducts;
