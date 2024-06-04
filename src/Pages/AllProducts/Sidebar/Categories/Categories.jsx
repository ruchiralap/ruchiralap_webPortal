/* eslint-disable react/prop-types */
import Input from "../../../../Hooks/Input";
import { motion } from "framer-motion";

const Categories = ({ handleChange }) => {
  return (
    <>
      <div>
        <motion.h2
          className="text-2xl font-semibold text-[#201700]"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          Categories
        </motion.h2>
        <div className=" mt-8">
          <div className=" grid space-y-2">
            <label className=" flex items-center gap-1 font-medium hover:cursor-pointer">
              <input
                onChange={handleChange}
                type="radio"
                value=""
                name="test"
              />
              <span className="checkmark"></span>All
            </label>
            <Input
              handleChange={handleChange}
              value="Organic Oil"
              title="Organic Oil"
              name="test"
            />
            <Input
              handleChange={handleChange}
              value="Honey"
              title="Honey"
              name="test"
            />
            <Input
              handleChange={handleChange}
              value="Nuts & Seeds"
              title="Nuts & Seeds"
              name="test"
            />
            <Input
              handleChange={handleChange}
              value="Local Maghi Sarisha Oil"
              title="Local Maghi Sarisha Oil"
              name="test"
            />
            <Input
              handleChange={handleChange}
              value="Masala"
              title="Masala"
              name="test"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
