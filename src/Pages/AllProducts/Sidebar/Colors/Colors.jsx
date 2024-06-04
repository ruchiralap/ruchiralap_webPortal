/* eslint-disable react/prop-types */
import Input from "../../../../Hooks/Input";
import { motion } from "framer-motion";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className=" mt-8">
        <motion.h2
          className=" text-2xl font-semibold text-[#201700]"
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
          Colors
        </motion.h2>
        <div className=" mt-5 space-y-2">
          <label className=" flex items-center gap-1 font-medium hover:cursor-pointer">
            <input onChange={handleChange} type="radio" value="" name="test4" />
            <span className="checkmark"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value="black"
            title="Black"
            name="test4"
            color="black"
          />

          <Input
            handleChange={handleChange}
            value="blue"
            title="Blue"
            name="test4"
            color="blue"
          />

          <Input
            handleChange={handleChange}
            value="red"
            title="Red"
            name="test4"
            color="red"
          />

          <Input
            handleChange={handleChange}
            value="green"
            title="Green"
            name="test4"
            color="green"
          />
        </div>
      </div>
    </>
  );
};

export default Colors;
