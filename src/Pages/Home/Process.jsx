import { motion } from "framer-motion";
import { CiBeaker1 } from "react-icons/ci";
import { GiProcessor } from "react-icons/gi";
import { PiDropLight } from "react-icons/pi";
import { GiGlassCelebration } from "react-icons/gi";
import beekeeper from "../../assets/beekeeper.png";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Process = () => {
  return (
    <>
      <section className="bg-[#ECE7D4] ">
        <div className="p-5 lg:p-8 mx-auto max-w-7xl md:flex items-center justify-around gap-16 md:p-10 mb-10 md:mb-20 mt-10 md:mt-20">
          <div className="flx1">
            <motion.img
              className="w-full"
              src={beekeeper}
              alt="Beekeeper Image"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <motion.div
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#332A08] text-center">
                PROCESS WE FOLLOW
              </h1>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14 mt-10">
              {[
                {
                  icon: <CiBeaker1 />,
                  text: "From Lab to Lab. Not Factory to Fork",
                },
                {
                  icon: <GiProcessor />,
                  text: "Highly Processed With a Deep Respect",
                },
                {
                  icon: <GiGlassCelebration />,
                  text: "We Celebrate the Alchemy of Science and Care",
                },
                {
                  icon: <PiDropLight />,
                  text: "No shortcuts, no fillers, just 100% pure ingredients",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center"
                  initial="hidden"
                  animate="visible"
                  variants={iconVariants}
                >
                  <div className="avatar">
                    <motion.div
                      className="p-3 bg-[#E2DCC6] rounded-full text-6xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  <motion.p
                    className="mt-2 font-medium text-center"
                    variants={textVariants}
                  >
                    {item.text}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Process;
