import { Link } from "react-router-dom";
import IsSearch from "./IsSearch";
import { FaOpencart } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <section className="bg-[#201700] text-[#FFF3BC] flex items-center justify-between">
        <div className="flex items-center md:w-full md:gap-10">
          <div className="">
            <Link to="/">
              <div className="avatar">
                <div className="md:w-[100px] w-[70px] rounded-full">
                  <img src={logo} alt="website logo image" />
                </div>
              </div>
            </Link>
          </div>
          <div className="md:w-full">
            <IsSearch />
          </div>
        </div>
        <div className=" hidden md:flex items-center gap-1 md:gap-3 lg:gap-4 md:px-10 px-2 w-full justify-end">
          <div className=" hover:cursor-pointer border border-[#FFF3BC] p-1 rounded-md">
            <Link to="/contact">
              <MdAddIcCall className="md:text-2xl" />
            </Link>
          </div>
          <div className=" hover:cursor-pointer border border-[#FFF3BC] p-1 rounded-md">
            <FaOpencart className="md:text-2xl " />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
