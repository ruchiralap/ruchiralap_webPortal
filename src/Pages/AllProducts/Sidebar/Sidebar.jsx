/* eslint-disable react/prop-types */
import { IoReorderThree } from "react-icons/io5";
import Categories from "./Categories/Categories";
import Price from "./Price/Price";
import Size from "./Size/Size";
import Products from "../Products/Products";
import { useContext } from "react";
import { FilterContext } from "../../../Context/FilterProvider";
import { GoChevronDown } from "react-icons/go";

const Sidebar = () => {
  const { result, handleChange } = useContext(FilterContext);

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5">
          <label htmlFor="my-drawer-2" className="lg:hidden">
            <div className="flex items-center gap-1 hover:border px-4 py-2 rounded-md bg-[#F6CF0F] text-[#201700] font-medium hover:bg-none absolute">
              Filter <GoChevronDown className=" text-xl" />
            </div>
          </label>
          <section>
            <Products result={result} />
          </section>
        </div>
        <div className="drawer-side border-r-2">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <section className="menu p-10 w-80 min-h-full bg-base-200 md:bg-inherit text-base-content">
            <Categories handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Size handleChange={handleChange} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
