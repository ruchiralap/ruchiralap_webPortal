import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

/* eslint-disable react/prop-types */
const ProductsCard = ({ product }) => {
  const { product_name, product_image, price, _id } = product || {};

  return (
    <>
      <section className=" hover:cursor-pointer">
        <Link to={`/productDetails/${_id}`}>
          <div className="bg-gradient-to-r from-[#f6edbd] via-[#FFFBE8] to-[#f6edbd]">
            <img className="w-full mx-auto" src={product_image} alt="" />
          </div>
        </Link>
        <div className=" flex items-center justify-between mt-5 px-1">
          <div className="text-[#443930]">
            <Link to={`/productDetails/${_id}`}>
              <h4 className="font-semibold">
                {product_name.length > 50
                  ? product_name
                  : product_name.slice(0, 30)}
              </h4>
            </Link>
            <p className=" text-[#443930] font-medium mt-1 flex items-center gap-1">
              <span>Tk</span>
              {price}
            </p>
          </div>
          <div className="">
            <button className="p-2 text-sm rounded-full bg-[#E1DAC5] hover:bg-[#493A00] hover:text-[#D7D0CC]">
              <MdAddShoppingCart className=" text-xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsCard;
