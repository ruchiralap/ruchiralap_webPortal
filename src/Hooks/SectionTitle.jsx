/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const SectionTitle = ({ title, details }) => {
  return (
    <>
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-[#201700]">{title}</h1>
        <p className="md:w-1/2">{details}</p>
      </motion.div>
    </>
  );
};

export default SectionTitle;
