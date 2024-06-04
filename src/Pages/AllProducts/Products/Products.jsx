/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FilterContext } from "../../../Context/FilterProvider";

const Products = ({ result }) => {
  const { handleMinPriceChange, handleMaxPriceChange } =
    useContext(FilterContext);

  return (
    <>
      <div>
        {/* Price range filter */}
        <div>
          <input
            type="number"
            placeholder="Min Price"
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            placeholder="Max Price"
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
      <div>
        <section className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-5">
          {result}
        </section>
      </div>
    </>
  );
};

export default Products;
