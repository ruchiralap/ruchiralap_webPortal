import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Swal from "sweetalert2";
import useAllProducts from "../../Hooks/useAllProducts";
import { MdAddShoppingCart } from "react-icons/md";
import SectionTitle from "../../Hooks/SectionTitle";
import { useCart } from "../../Context/CartContext";

const BestProducts = () => {
  const [allProducts] = useAllProducts();
  const { scrollY } = useViewportScroll();
  const { addToCart } = useCart();
  const [visibleProducts, setVisibleProducts] = useState(9);

  const yScrollUp = useTransform(scrollY, [0, 700], [50, 0]);
  const opacityScrollUp = useTransform(scrollY, [0, 300], [0, 1]);

  const yScrollDown = useTransform(scrollY, [0, 300], [-50, 0]);
  const opacityScrollDown = useTransform(scrollY, [0, 300], [0, 1]);

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

  const handleSeeMore = () => {
    setVisibleProducts(allProducts.length);
  };

  const handleSeeLess = () => {
    setVisibleProducts(9);
  };

  return (
    <>
      <section className="mt-20 p-5 lg:p-8 mx-auto max-w-7xl">
        <SectionTitle
          title="Most Popular & New Organic Food"
          details="The demand for organic food is growing at a remarkable rate. Consumers have made it want organic produce and every sector of the food."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {allProducts &&
            allProducts.slice(0, visibleProducts).map((product, index) => (
              <motion.div
                key={product?._id}
                className=" bg-[#ce8e1e1b]"
                style={
                  index % 2 === 0
                    ? { y: yScrollUp, opacity: opacityScrollUp }
                    : { y: yScrollDown, opacity: opacityScrollDown }
                }
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={`/productDetails/${product?._id}`}>
                    <motion.img
                      className=" w-full object-cover object-center h-[320px] mx-auto"
                      src={product?.product_image}
                      alt="Product Image"
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </Link>
                </motion.div>
                <div className="px-4 py-5 flex items-center justify-between">
                  <div className="text-[#443930]">
                    <Link to={`/productDetails/${product?._id}`}>
                      <h4 className="text-xl font-semibold">
                        {product.product_name.length < 25
                          ? product.product_name
                          : product.product_name.slice(0, 25)}{" "}
                        <span>{product.product_name.length > 25 && "..."}</span>
                      </h4>
                    </Link>
                    <p className="text-[#15120f] font-medium mt-1">
                      <span>Tk </span>
                      {product?.price}
                    </p>
                  </div>
                  <div>
                    <button
                      className="p-3 rounded-full bg-[#FFFBE8] hover:bg-[#EEAB0F] hover:text-white transition-colors duration-300"
                      onClick={() => handleAddToCart(product)}
                    >
                      <MdAddShoppingCart className="text-2xl" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        {visibleProducts < allProducts.length ? (
          <div className="flex justify-end mt-10">
            <button
              className=" px-5 py-2 bg-[#EEAB0F] text-white transition-colors duration-300"
              onClick={handleSeeMore}
            >
              See More
            </button>
          </div>
        ) : (
          <div className="flex justify-end mt-10">
            <button
              className=" px-5 py-2 bg-[#EEAB0F] text-white transition-colors duration-300"
              onClick={handleSeeLess}
            >
              See Less
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default BestProducts;
