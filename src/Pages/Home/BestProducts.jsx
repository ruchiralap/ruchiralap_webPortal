import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useAllProducts from "../../Hooks/useAllProducts";
import { MdAddShoppingCart } from "react-icons/md";

const BestProducts = () => {
  const [allProducts] = useAllProducts();
  const { scrollY } = useViewportScroll();

  // Scroll up animation
  const yScrollUp = useTransform(scrollY, [0, 700], [50, 0]);
  const opacityScrollUp = useTransform(scrollY, [0, 300], [0, 1]);

  // Scroll down animation
  const yScrollDown = useTransform(scrollY, [0, 300], [-50, 0]);
  const opacityScrollDown = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <>
      <section className="mt-20 w-11/12 mx-auto">
        <div className="mb-14">
          <h3 className="text-5xl font-extrabold text-[#362A0A]">
            Best Sell Products
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProducts &&
            allProducts.slice(0, 9).map((product, index) => (
              <motion.div
                key={product?._id}
                className=" bg-[#fff3bc]"
                style={
                  index % 2 === 0
                    ? { y: yScrollUp, opacity: opacityScrollUp }
                    : { y: yScrollDown, opacity: opacityScrollDown }
                }
              >
                <motion.div
                  className=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={`/productDetails/${product?._id}`}>
                    <motion.img
                      className="w-full h-[320px] mx-auto rounded-3xl"
                      src={product?.product_image}
                      alt="Product Image"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </Link>
                </motion.div>
                <div className="px-4 pb-8 flex items-center justify-between">
                  <div className="text-[#443930]">
                    <Link to={`/productDetails/${product?._id}`}>
                      <h4 className="text-xl font-semibold">
                        {product?.product_name}
                      </h4>
                    </Link>
                    <p className="text-[#15120f] font-medium mt-1">
                      <span>Tk </span>
                      {product?.price}
                    </p>
                  </div>
                  <div>
                    <button className="p-3 rounded-full bg-[#FFFBE8] hover:bg-[#EEAB0F] hover:text-white transition-colors duration-300">
                      <MdAddShoppingCart className="text-2xl" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        <div className="flex justify-end items-center mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#EEAB0F] text-white font-bold py-2 px-4"
          >
            <Link to="/allProducts">See More...</Link>
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default BestProducts;
