import { useParams } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";
import DetailsCard from "./DetailsCard";

const ProductDetails = () => {
  const [allProducts] = useAllProducts();
  const { id } = useParams();

  const productDetail = allProducts.find((itm) => itm._id === id);

  // If productDetail is undefined, show a loading or not found message
  if (!productDetail) {
    return (
      <div className=" flex items-center justify-center h-screen text-red-500 text-3xl">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <section className=" w-11/12 mx-auto">
        <div>
          <DetailsCard productDetail={productDetail} />
        </div>
        <div></div>
      </section>
    </>
  );
};

export default ProductDetails;
