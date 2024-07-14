/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { FilterContext } from "../../../Context/FilterProvider";
import { GoChevronDown } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import Categories from "./Categories/Categories";
import Products from "../Products/Products";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { result, handleChange } = useContext(FilterContext);
  const drawerCheckboxRef = useRef(null);

  const handleCloseDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false;
    }
  };

  // Framer Animation
  const drawerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <>
      <div className="drawer lg:drawer-open p-5 lg:p-8 mx-auto max-w-7xl">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerCheckboxRef}
        />
        <motion.div
          className="drawer-content p-5"
          initial="hidden"
          animate="visible"
          variants={drawerVariants}
          transition={{ duration: 0.5 }}
        >
          <label htmlFor="my-drawer-2" className="lg:hidden">
            <motion.div
              className="flex -top-[27px] items-center gap-1 hover:border px-4 py-2 rounded-md text-[#201700] font-medium hover:bg-none absolute"
              whileHover="hover"
              variants={hoverVariants}
            >
              Filter <GoChevronDown className="text-xl animate-bounce" />
            </motion.div>
          </label>
          <section>
            <Products result={result} />
          </section>
        </motion.div>
        <div className="drawer-side border-r-2">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <section className="menu p-10 w-80 min-h-full bg-base-200 lg:bg-inherit text-base-content">
            <motion.div
              className="flex lg:hidden items-center justify-end rounded-md px-4 py-2 border absolute right-5 hover:cursor-pointer shadow-md"
              onClick={handleCloseDrawer}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <RxCross2 className="text-xl" />
            </motion.div>
            <Categories handleChange={handleChange} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
