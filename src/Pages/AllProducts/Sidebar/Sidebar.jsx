/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { FilterContext } from "../../../Context/FilterProvider";
import { GoChevronDown } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import Categories from "./Categories/Categories";
import Price from "./Price/Price";
import Size from "./Size/Size";
import Products from "../Products/Products";

const Sidebar = () => {
  const { result, handleChange } = useContext(FilterContext);
  const drawerCheckboxRef = useRef(null);

  const handleCloseDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false;
    }
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerCheckboxRef}
        />
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
            <div
              className="flex items-center justify-end rounded-md px-4 py-2 border absolute right-5 hover:cursor-pointer shadow-md"
              onClick={handleCloseDrawer}
            >
              <RxCross2 className=" text-xl" />
            </div>
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
