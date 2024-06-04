/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ product_name, product_image, price, _id }) => {
  return (
    <>
      <section className="hover:cursor-pointer">
        <Link to={`/productDetails/${_id}`}>
          <div className="bg-gradient-to-r from-[#f6edbd] via-[#FFFBE8] to-[#f6edbd]">
            <motion.img
              className="w-full mx-auto"
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
                {product_name.length > 50
                  ? product_name
                  : product_name.slice(0, 30)}
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
              <MdAddShoppingCart className="text-xl" />
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
