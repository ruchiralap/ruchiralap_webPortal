import SectionTitle from "../../../Hooks/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useCategory from "../../../Hooks/useCategory";
import useAllProducts from "../../../Hooks/useAllProducts";
import TrendingCard from "./TrendingCard";
import { motion } from "framer-motion";
import { useCart } from "../../../Context/CartContext";
import Swal from "sweetalert2";

const tabVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const TrendingProducts = () => {
  const [allCategory] = useCategory();
  const [allProducts] = useAllProducts();
  const { addToCart } = useCart();

  return (
    <>
      <div id="trending" className="p-5 lg:p-8 mx-auto max-w-7xl ">
        <SectionTitle
          title="Our Trending Organic & Fresh Products"
          details="We connect buyers & sellers of natural, organic, environmentally sound products."
        />
        <section className="mt-10">
          <Tabs>
            <TabList className="flex overflow-x-auto whitespace-nowrap">
              {allCategory?.map((itm) => (
                <Tab
                  key={itm?._id}
                  className="px-4 py-2 mr-4 rounded-md border border-[#EEAB0F] focus:outline-none hover:cursor-pointer"
                >
                  <motion.div
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      duration: 0.5,
                      delay: allCategory.indexOf(itm) * 0.1,
                    }}
                  >
                    {itm?.category_name}
                  </motion.div>
                </Tab>
              ))}
            </TabList>

            {allCategory?.map((itm) => (
              <TabPanel key={itm?._id}>
                <TrendingCard
                  items={allProducts?.filter(
                    (product) => product?.category_name === itm?.category_name
                  )}
                />
              </TabPanel>
            ))}
          </Tabs>
        </section>
      </div>
    </>
  );
};

export default TrendingProducts;
