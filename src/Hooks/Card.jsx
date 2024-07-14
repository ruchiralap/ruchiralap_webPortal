/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useCart } from "../Context/CartContext";

const Card = ({ product_name, product_image, price, _id, product }) => {
  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Added to cart",
      text: `${product.product_name} has been added to your cart.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <section className="hover:cursor-pointer">
        <Link to={`/productDetails/${_id}`}>
          <div className="bg-gradient-to-r from-[#f6edbd] via-[#FFFBE8] to-[#f6edbd]">
            <motion.img
              className=" w-full h-[250px] mx-auto"
              src={product_image}
              alt=""
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </Link>
        <div className="flex items-center justify-between mt-5 px-1">
          <div className="text-[#443930]">
            <Link to={`/productDetails/${_id}`}>
              <h4 className="font-semibold">
                {product_name.length < 25
                  ? product_name
                  : product_name.slice(0, 25)}{" "}
                <span>{product_name.length > 25 && "..."}</span>
              </h4>
            </Link>
            <p className="text-[#443930] font-medium mt-1 flex items-center gap-1">
              <span>Tk</span>
              {price}
            </p>
          </div>
          <div className="">
            <motion.button
              className="p-2 text-sm rounded-full bg-[#E1DAC5] hover:bg-[#493A00] hover:text-[#D7D0CC]"
              whileHover={{
                scale: 1.2,
                backgroundColor: "#493A00",
                color: "#D7D0CC",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdAddShoppingCart
                onClick={() => handleAddToCart(product)}
                className="text-xl"
              />
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
