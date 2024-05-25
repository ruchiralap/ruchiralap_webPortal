/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import honey from "../../assets/honneyCommitment.png";

const Commitment = () => {
  return (
    <>
      <section>
        <div className=" flex items-center justify-center">
          <img src={honey} alt="" />
        </div>
        <div className=" text-center md:w-6/12 mx-auto space-y-3">
          <h1 className="text-[#342B0B] text-2xl md:text-4xl font-extrabold font-roboto">
            OUR COMMITMENT TO YOUR 100% SATISFACTION
          </h1>
          <p className="text-[#0c0c0c] text-sm font-roboto">
            We're confident you'll fall head over honey for our infused nuts,
            but if, against all odds, you don't, just let us know! 100%
            satisfaction guaranteed
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link to="/allProducts">
            <button className=" border border-[#F9C302] rounded-full px-12 py-4 text-[#F9C302] hover:text-[#201700] hover:bg-[#F9C302] font-extrabold">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Commitment;
