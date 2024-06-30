/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import honey from "../../assets/honneyCommitment.png";

const Commitment = () => {
  return (
    <section className="md:bg-commitment-bg bg-no-repeat bg-cover mt-36 p-5 lg:p-8 mx-auto max-w-7xl">
      <div className="flex items-center justify-center">
        <motion.img
          src={honey}
          alt=""
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <motion.div
        className="text-center md:w-6/12 mx-auto space-y-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-[#342B0B] text-2xl md:text-4xl font-extrabold font-roboto">
          OUR COMMITMENT TO YOUR 100% SATISFACTION
        </h1>
        <p className="text-[#0c0c0c] text-sm font-roboto">
          We're confident you'll fall head over honey for our infused nuts, but
          if, against all odds, you don't, just let us know! 100% satisfaction
          guaranteed
        </p>
      </motion.div>
      <div className="mt-10 flex items-center justify-center">
        <Link to="/allProducts">
          <motion.button
            className="px-12 py-4 text-white bg-[#EEAB0F] font-extrabold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Shop Now
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Commitment;
