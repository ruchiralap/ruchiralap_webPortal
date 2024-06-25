import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import logo from "../../assets/logo.png";
import SearchModal from "./SearchModal";
import { useContext } from "react";
import { FilterContext } from "../../Context/FilterProvider";
import Cart from "../../Pages/Cart/Cart";

const Navbar = () => {
  const { handleInputChange } = useContext(FilterContext);

  return (
    <>
      <section className=" text-[#FFF3BC] flex items-center justify-between">
        <div className="flex items-center md:gap-10">
          {/* Logo */}
          <div className=" flex-1">
            <Link to="/">
              <div className="">
                <div className=" h-24 rounded-full">
                  <img
                    className="lg:-top-[35px] md:-top-[45px] -top-[35px] lg:w-[200px] md:w-[230px] w-[200px] relative"
                    src={logo}
                    alt="website logo image"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* Input search */}
        <div className="flex-1 hidden lg:flex items-center">
          <div className=" w-full">
            <input
              className=" rounded-l-full px-5 py-3 focus:outline-none text-black bg-transparent border border-[#EEAB0F] w-full"
              type="search"
              onChange={handleInputChange}
              name=""
              id=""
              placeholder="Search product's..."
            />
          </div>
          <div>
            <Link to="/allProducts">
              <button className="bg-[#EEAB0F] text-white py-[13px] px-12 rounded-r-full">
                Search
              </button>
            </Link>
          </div>
        </div>
        {/* Icons */}
        <div>
          {/* Section For Mobile Menu Start */}
          <section className="lg:hidden flex items-center gap-4 px-3">
            <div className=" hidden sm:flex items-center gap-3">
              <div>
                <BiSupport className=" text-black text-3xl md:text-5xl" />
              </div>
              <div className=" text-black">
                <p>24/7 Support</p>
                <p>+880 01770064053</p>
              </div>
            </div>
            <div>
              <button
                className=" border border-[#EEAB0F] p-2 rounded-md"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <IoIosSearch className="md:text-2xl text-xl text-black " />
              </button>
              <SearchModal />
            </div>
            <Cart />
          </section>
          {/* Section For Mobile Menu End */}
          <div className="hidden lg:flex items-center gap-1 md:gap-3 lg:gap-4 md:px-10 px-2 justify-end">
            <div className=" flex items-center gap-3">
              <div>
                <BiSupport className=" text-black text-3xl md:text-5xl" />
              </div>
              <div className=" text-black">
                <p>24/7 Support</p>
                <p>+880 01770064053</p>
              </div>
            </div>
            <div className=" hover:cursor-pointer border border-[#EEAB0F] p-1 rounded-md">
              <Link to="/contact">
                <MdAddIcCall className="md:text-2xl text-black" />
              </Link>
            </div>
            <Cart />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
