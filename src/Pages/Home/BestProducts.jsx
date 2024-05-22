import { Link } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";
import { ShoppingBag } from "lucide-react";

const BestProducts = () => {
  const [allProducts] = useAllProducts();

  return (
    <>
      <section className=" mt-20">
        <div className="mb-10">
          <h3 className=" text-3xl font-extrabold text-[#362A0A]">
            Best Sell Products
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProducts &&
            allProducts?.map((product) => (
              <div
                key={product?._id}
                className="bg-[#F0EBD8] rounded-3xl shadow-md hover:shadow-2xl"
              >
                <div className=" bg-transparent rounded-3xl">
                  <Link to={`/productDetails/${product?._id}`}>
                    <img
                      className=" w-full mx-auto rounded-3xl"
                      src={product?.product_image}
                      alt="Product Image"
                    />
                  </Link>
                </div>
                <div className=" flex items-center justify-between p-5">
                  <div className="text-[#443930]">
                    <Link to={`/productDetails/${product?._id}`}>
                      <h4 className=" text-xl font-semibold">
                        {product?.product_name}
                      </h4>
                    </Link>
                    <p className=" text-[#443930] font-medium mt-1">
                      <span>Tk</span>
                      {product?.price}
                    </p>
                  </div>
                  <div className="">
                    <button className="p-3 text-sm rounded-full bg-[#E1DAC5] hover:bg-[#493A00] hover:text-[#D7D0CC]">
                      <ShoppingBag />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default BestProducts;
