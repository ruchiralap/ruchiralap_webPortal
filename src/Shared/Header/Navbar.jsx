import { Link } from "react-router-dom";
import IsSearch from "./IsSearch";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <section className="bg-[#201700] text-[#FFF3BC] flex items-center justify-between py-8 px-10">
        <div className=" flex items-center">
          <div>
            <div className="">
              <Link to="/">
                <h3 className=" md:text-4xl text-[#FFF3BC] font-mono mr-20">
                  Ruchir Alap
                </h3>
              </Link>
            </div>
          </div>
          <div>
            <IsSearch />
          </div>
        </div>
        <div className=" hover:cursor-pointer border border-[#FFF3BC] p-1 rounded-md">
          <FaOpencart className=" text-3xl " />
        </div>
      </section>
    </>
  );
};

export default Navbar;
