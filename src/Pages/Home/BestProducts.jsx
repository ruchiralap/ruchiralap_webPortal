import { Link } from "react-router-dom";
import useAllProducts from "../../Hooks/useAllProducts";
import { MdAddShoppingCart } from "react-icons/md";

const BestProducts = () => {
  const [allProducts] = useAllProducts();
  console.log(allProducts);

  return (
    <>
      <section className=" mt-20 w-11/12 mx-auto">
        <div className="mb-10">
          <h3 className="text-color text-3xl font-extrabold">
            Best Sell Products
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProducts &&
            allProducts?.map((product) => (
              <div
                key={product?._id}
                className="product-card hover:rounded-none border border-color rounded-3xl shadow-md hover:shadow-2xl"
              >
                <div className=" rounded-3xl">
                  <Link to={`/productDetails/${product?._id}`}>
                    <img
                      className="hover:animate-zoomOut w-full mx-auto rounded-3xl"
                      src={product?.product_image}
                      alt="Product Image"
                    />
                  </Link>
                </div>
                <div className=" flex items-center justify-between p-5">
                  <div className="text-color">
                    <Link to={`/productDetails/${product?._id}`}>
                      <h4 className=" text-xl font-semibold">
                        {product?.product_name}
                      </h4>
                    </Link>
                    <p className="font-medium mt-1">
                      <span>Tk </span>
                      {product?.price}
                    </p>
                  </div>
                  <div className="">
                    <button className="dynamic-btn rounded-full p-2 border-none hover:scale-125">
                      <MdAddShoppingCart className=" text-3xl" />
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
