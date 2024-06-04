/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <>
      <label className="flex items-center gap-1 font-medium hover:cursor-pointer">
        <motion.input
          onChange={handleChange}
          type="radio"
          value={value}
          name={name}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.span
          className="checkmark"
          style={{ backgroundColor: color }}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        ></motion.span>
        <motion.span
          whileFocus={{ scale: 1.05 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          {title}
        </motion.span>
      </label>
    </>
  );
};

export default Input;
