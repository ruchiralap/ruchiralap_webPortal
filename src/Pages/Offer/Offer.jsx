import SectionTitle from "../../Hooks/SectionTitle";
import { offer } from "../../data/data";
import OfferCad from "./OfferCad";

const Offer = () => {
  return (
    <>
      <section className=" mt-24 w-11/12 mx-auto">
        <SectionTitle
          title="What We Offer For You"
          details="We Connect buyers and Sellers of Naturals Organic Environmentally sound products. We find the best and makers natural and organic."
        />
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {offer.map((itm) => (
            <OfferCad key={itm?.id} itm={itm} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Offer;
