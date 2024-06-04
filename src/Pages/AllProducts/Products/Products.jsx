/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FilterContext } from "../../../Context/FilterProvider";

const Products = ({ result }) => {
  const { handleMinPriceChange, handleMaxPriceChange } =
    useContext(FilterContext);

  return (
    <>
      <div className=" flex items-end justify-end">
        {/* Price range filter */}
        <div className=" flex items-center">
          <input
            className="bg-[#FFFBE8] focus:outline-none shadow-md border-[#201700] text-[#201700] px-5 py-2 rounded-l-full md:w-36 w-full"
            type="number"
            placeholder="Min Price"
            onChange={handleMinPriceChange}
          />
          <input
            className="bg-[#FFFBE8] focus:outline-none shadow-md border-[#201700] text-[#201700] px-5 py-2 rounded-r-full md:w-36 w-full"
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
