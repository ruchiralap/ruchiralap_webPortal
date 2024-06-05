import { Link } from "react-router-dom";
import IsSearch from "./IsSearch";
import { FaOpencart } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <section className="bg-[#201700] text-[#FFF3BC] flex items-center justify-between">
        <div className="flex md:items-center w-full">
          <div className="">
            <Link to="/">
              <div className="avatar">
                <div className="w-[110px] rounded-full">
                  <img src={logo} />
                </div>
              </div>
            </Link>
          </div>
          <div className=" w-full">
            <IsSearch />
          </div>
        </div>
        <div className=" flex items-center gap-4 px-10">
          <div className=" hover:cursor-pointer border border-[#FFF3BC] p-1 rounded-md">
            <Link to="/contact">
              <MdAddIcCall className=" text-2xl" />
            </Link>
          </div>
          <div className=" hover:cursor-pointer border border-[#FFF3BC] p-1 rounded-md">
            <FaOpencart className=" text-2xl " />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
