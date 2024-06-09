/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useCategory from "../../Hooks/useCategory";
import AnimatedButton from "../../Hooks/AnimatedButton";
import SectionTitle from "../../Hooks/SectionTitle";

const Category = () => {
  const [allCategory] = useCategory();

  return (
    <>
      <div className="w-11/12 mx-auto mt-44">
        <div>
          <SectionTitle title="Our Top Collection's" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {allCategory &&
            allCategory.map((category) => (
              <motion.div
                key={category?._id}
                className=""
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={`/categoryWiseProducts/${category?._id}/${category?.category_name}`}
                >
                  <div>
                    <motion.div
                      className="bg-[#FAEFD4] w-full h-[250px]"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        className=" w-[250px] mx-auto rounded-full"
                        src={category?.category_image}
                        alt="Category Image"
                        initial={{ clipPath: "circle(0% at 50% 50%)" }}
                        animate={{ clipPath: "circle(50% at 50% 50%)" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                    <div className="text-center">
                      <AnimatedButton
                        borderColor="border-[#EEAB0F]"
                        text={category?.category_name}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Category;
