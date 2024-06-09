import SectionTitle from "../../../Hooks/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useCategory from "../../../Hooks/useCategory";
import useAllProducts from "../../../Hooks/useAllProducts";
import TrendingCard from "./TrendingCard";

const TrendingProducts = () => {
  const [allCategory] = useCategory();
  const [allProducts] = useAllProducts();

  return (
    <>
      <div className=" w-11/12 mx-auto">
        <SectionTitle
          title="Our Trending Organic & Fresh Products"
          details="We Connect buyers & Sellers of Natural, Organic, Enviornmetnlly sound products."
        />
        <section className=" mt-10">
          <Tabs>
            <TabList>
              {allCategory?.map((itm) => (
                <Tab key={itm?._id}>{itm?.category_name}</Tab>
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
