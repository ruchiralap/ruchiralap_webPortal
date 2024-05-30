/* eslint-disable react/prop-types */
import { IoReorderThree } from "react-icons/io5";
import Categories from "./Categories/Categories";
import Price from "./Price/Price";
import Size from "./Size/Size";
import Colors from "./Colors/Colors";
import Products from "../Products/Products";

const Sidebar = ({ handleChange, products }) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
            <IoReorderThree />
          </label>
          <section>
            <Products products={products} />
          </section>
        </div>
        <div className="drawer-side border-r-2">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <section className="menu p-10 w-80 min-h-full bg-base-200 md:bg-inherit text-base-content">
            {/* Sidebar content here */}
            <Categories handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />
            <Size handleChange={handleChange} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
