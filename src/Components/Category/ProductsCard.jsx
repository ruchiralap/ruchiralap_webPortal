/* eslint-disable react/prop-types */
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  // console.log(product);

  return (
    <>
      <section>
        <div>
          <div
            key={product?._id}
            className="product-card border-color hover:rounded-none rounded-3xl shadow-md hover:shadow-2xl"
          >
            <div className=" bg-transparent rounded-3xl">
              <Link to={`/productDetails/${product?._id}`}>
                <img
                  className="hover:animate-zoomOut w-full mx-auto rounded-3xl"
                  src={product?.product_image}
                  alt="Product Image"
                />
              </Link>
            </div>
            <div className=" flex items-center justify-between p-5">
              <div className="product-or-price-name">
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
              <div>
                <button className="dynamic-btn rounded-full p-2 border-none hover:scale-125">
                  <MdAddShoppingCart className=" text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsCard;
