/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useCart } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const DetailsCard = ({ productDetail, AccordionItem }) => {
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
  const {
    product_name,
    category_name,
    price,
    product_image,
    description,
    description_title,
    description_title_1,
    description_point_1_1,
    description_point_1_2,
    description_point_1_3,
    description_title_2,
    description_point_2_1,
    description_point_2_2,
    description_point_2_3,
    description_title_3,
    description_point_3_1,
    description_point_3_2,
    description_point_3_3,
    description_title_4,
    description_point_4_1,
    description_point_4_2,
    description_point_4_3,
    description_title_5,
    description_point_5_1,
    description_point_5_2,
    description_point_5_3,
    weight,
  } = productDetail || {};

  return (
    <>
      <section className=" grid md:flex gap-5 md:gap-10">
        <div className=" flex-1">
          <img className=" w-full" src={product_image} alt="" />
        </div>
        <div className=" flex-1 mt-8">
          <h2 className=" text-4xl font-semibold">
            {product_name} (<span>{weight && weight}</span>)
          </h2>
          <p className="text-[#1F2937] font-semibold mt-2 px-1">
            {category_name}
          </p>
          <p className=" font-semibold mt-2 text-xl">
            <span>Tk</span> {price}
          </p>
          <p className=" mt-2 text-sm">{description}</p>
          <div className=" space-y-3 items-center justify-between gap-3 mt-10">
            <motion.button
              onClick={() => handleAddToCart(productDetail)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#F6CF0F] font-semibold rounded-full w-full py-2"
            >
              Add to cart
            </motion.button>
            <motion.button
              onClick={() => handleAddToCart(productDetail)}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#F6CF0F",
                color: "black",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#F6CF0F] font-semibold rounded-full w-full py-2 px-5"
            >
              <Link to="/viewCart">ক্যাশ অন ডেলিভারিতে অর্ডার করুন</Link>
            </motion.button>
          </div>
          <div className=" mt-20">
            <h2 className=" text-4xl font-extrabold text-[#201700]"></h2>
            <AccordionItem title="Description:">
              <div className=" mt-5">
                <h3 className=" text-2xl font-semibold text-[#201700]">
                  {description_title && description_title}
                </h3>
                <h3 className=" text-2xl font-semibold text-[#201700] mt-10">
                  {description_title_1 && description_title_1}
                </h3>
                <div className=" mt-4 space-y-1">
                  <p className=" px-5">{description_point_1_1}</p>
                  <p className=" px-5">
                    {description_point_1_2 && description_point_1_2}
                  </p>
                  <p className=" px-5">
                    {description_point_1_3 && description_point_1_3}
                  </p>
                </div>
                <p className=" text-2xl font-semibold mt-5 text-[#201700]">
                  {description_title_2 && description_title_2}
                </p>
                <div className=" mt-4 space-y-1">
                  <p className=" px-5">
                    {description_point_2_1 && description_point_2_1}
                  </p>
                  <p className=" px-5">
                    {description_point_2_2 && description_point_2_2}
                  </p>
                  <p className=" px-5">
                    {description_point_2_3 && description_point_2_3}
                  </p>
                </div>
                <p className=" text-2xl font-semibold mt-5 text-[#201700]">
                  {description_title_3 && description_title_3}
                </p>
                <div className=" mt-4 space-y-1">
                  <p className=" px-5">
                    {description_point_3_1 && description_point_3_1}
                  </p>
                  <p className=" px-5">
                    {description_point_3_2 && description_point_3_2}
                  </p>
                  <p className=" px-5">
                    {description_point_3_3 && description_point_3_3}
                  </p>
                </div>
                <p className=" text-2xl font-semibold mt-5 text-[#201700]">
                  {description_title_4 && description_title_4}
                </p>
                <div className=" mt-4 space-y-1">
                  <p className=" px-5">
                    {description_point_4_1 && description_point_4_1}
                  </p>
                  <p className=" px-5">
                    {description_point_4_2 && description_point_4_2}
                  </p>
                  <p className=" px-5">
                    {description_point_4_3 && description_point_4_3}
                  </p>
                </div>
                <p className=" text-2xl font-semibold mt-5 text-[#201700]">
                  {description_title_5 && description_title_5}
                </p>
                <div className=" mt-4 space-y-1">
                  <p className=" px-5">
                    {description_point_5_1 && description_point_5_1}
                  </p>
                  <p className=" px-5">
                    {description_point_5_2 && description_point_5_2}
                  </p>
                  <p className=" px-5">
                    {description_point_5_3 && description_point_5_3}
                  </p>
                </div>
              </div>
            </AccordionItem>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsCard;
